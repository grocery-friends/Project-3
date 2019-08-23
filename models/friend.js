
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define("Friend", {
  }, {
    validate: {
      foreignKeys: function() {
        if (this.friend1Id === this.friend2Id) {
          throw new Error('You cannot be friends with yourself!')
        }
        if (this.friend1Id > this.friend2Id) {
          throw new Error('Friend1 must be lower than Friend2!')
        }
      }
    }
  });
  Friend.createOrdered = function (friend) {
    if (friend.friend1Id > friend.friend2Id) {
      var temp = friend.friend1Id;
      friend.friend1Id = friend.friend2Id;
      friend.friend2Id = temp;
    }
    return Friend.create(friend);
  }
  return Friend;
};
