module.exports = function(sequelize, DataTypes) {
    var shoppingList = sequelize.define("shoppingList", {
      
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      completed: {
        type: DataTypes.BOOLEAN,
        default: false
      }

    });

    return shoppingList;
};