'use strict';
module.exports = function(sequelize, DataTypes) {
  var Action = sequelize.define('Action', {
    image: DataTypes.TEXT,
    title: DataTypes.TEXT,
    link: DataTypes.TEXT,
    description: DataTypes.TEXT,
    description_2: DataTypes.TEXT,
    title_for_badge: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    promoted: DataTypes.BOOLEAN,
    promoted_priority: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Action;
};