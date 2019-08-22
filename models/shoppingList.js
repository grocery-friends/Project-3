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
    shoppingList.associate = function(db) {
      // We're saying that a model should belong to an make
      // A model can't be created without an make due to the foreign key constraint
      shoppingList.belongsTo(db.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return shoppingList;
};