'use strict';
module.exports = function(sequelize, DataTypes) {
  var PrizeEntry = sequelize.define('PrizeEntry', {
    action_id: DataTypes.INTEGER,
    badge_id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    festival_news: DataTypes.BOOLEAN
  });
  return PrizeEntry;
};