module.exports = function(sequelize, DataTypes) {
    var shopping = sequelize.define("shopping", {
      
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      completed: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      
    });

    return shopping;
}