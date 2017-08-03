'use strict';
module.exports = function(sequelize, DataTypes) {
  var PrizeEntry = sequelize.define('PrizeEntry', {
    badge_id: DataTypes.INTEGER,
    email: DataTypes.TEXT,
    festival_news: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PrizeEntry;
};