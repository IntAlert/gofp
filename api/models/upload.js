'use strict';
module.exports = function(sequelize, DataTypes) {
  var Upload = sequelize.define('Upload', {
    path: DataTypes.TEXT,
    url: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Upload;
};