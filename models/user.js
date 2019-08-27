// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    
    fName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    lName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate(function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  User.associate = function(db) {
    // Associating make with models
    // When an make is deleted, also delete any associated models
    User.hasMany(db.shoppingList, {
      onDelete: "cascade"
    });
    User.belongsToMany(User, {
      // this relationship will show as friend1 in resulting object
      as: "friend1",
      // the column to hold the info will be friend2Id
      foreignKey: "friend2Id",
      through: db.Friend,
      required: true
    });
    User.belongsToMany(User, {
      // this relationship will show as friend2 in resulting object
      as: "friend2",
      // the column to hold the info will be friend1Id
      foreignKey: "friend1Id",
      through: db.Friend,
      required: true
    });
  };
  User.prototype.getFriends = function () {
    var friend1 = this.friend1;
    var friend2 = this.friend2;
    if (!friend1) {
      friend1 = [];
    }
    if (!friend2) {
      friend2 = [];
    }
    return [...this.friend1, ...this.friend2];
  }

  return User;
};
