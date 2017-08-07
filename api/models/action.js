'use strict';
module.exports = function(sequelize, DataTypes) {
  var Action = sequelize.define('Action', {
    image: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Action;
};