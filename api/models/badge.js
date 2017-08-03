'use strict';
module.exports = function(sequelize, DataTypes) {
  var Badge = sequelize.define('Badge', {
    upload_id: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    opengraph: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Badge;
};