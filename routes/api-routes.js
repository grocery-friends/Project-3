// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      fName: req.body.firstName,
      lName: req.body.lastName
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.json("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        fName: req.body.firstName,
        lName: req.body.lirstName,
        id: req.user.id
      });
    }
  });
  
  app.post("/api/shoppingList", isAuthenticated, function(req, res) {
    console.log(req.body);
    db.shoppingList.create({
      title: req.body.title,
      completed: req.body.completed,
      UserId : req.user.id
    }).then(function(newItem) {
      res.json(newItem);
    }).catch(function(err) {
      console.log(err);
      res.sendStatus(500);
      // res.status(422).json(err.errors[0].message);
    });
  });

  app.get("/api/shoppingList", isAuthenticated, function(req, res) {
    db.shoppingList.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/shoppingList/:id", function(req, res) {
    db.shoppingList.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(results) {
        res.json(results);
      });
  });

  app.put("/api/shoppingList", function(req, res) {
    db.shoppingList.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });

  app.get("/api/nonfriends", function(req, res) {
    db.User.findOne({
      include: [{ model: db.User, as: "friend1" }, { model: db.User, as: "friend2"}],
      where: {
        id: req.user.id
      }
    }).then(function(user) {
      var friends = user.getFriends();
      var userIdsToFilter = [req.user.id, ...friends.map(friend => friend.id)];
      console.log(userIdsToFilter);
      var filterSet = new Set(userIdsToFilter);
      db.User.findAll({
        attributes: ["id", "email"]
      }).then(function(users) {
        res.json(users.filter(user => !filterSet.has(user.id)));
      }).catch(function(err) {
        console.log(err);
        res.status(422).json(err.errors[0].message);
      });
    }).catch(function(err) {
      console.log(err);
      res.status(422).json(err.errors[0].message);
    });
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/friends", function(req, res) {
    db.User.findOne({
      include: [{ model: db.User, as: "friend1" }, { model: db.User, as: "friend2"}],
      where: {
        id: req.user.id
      }
    }).then(function(user) {
      res.json(user.getFriends());
    }).catch(function(err) {
      console.log(err);
      res.status(422).json(err.errors[0].message);
    });
  });

  // Route for getting some data about our user to be used client side
  app.post("/api/friends", function(req, res) {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(friend) {
      db.Friend.createOrdered({
        friend1Id: friend.id,
        friend2Id: req.user.id
      }).then(function(friendData) {
        res.json(friendData);
      }).catch(function(err) {
        console.log(err);
        res.status(422).json(err);
      });
    }).catch(function(err) {
      console.log(err);
      res.status(422).json(err);
    });
  });
};
