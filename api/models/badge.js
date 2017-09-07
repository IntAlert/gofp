'use strict';
module.exports = function(sequelize, DataTypes) {
  var Badge = sequelize.define('Badge', {
    action_id: DataTypes.INTEGER,
    upload_id: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    story: DataTypes.TEXT,
    opengraph: DataTypes.TEXT,
    promoted: DataTypes.BOOLEAN,
    promoted_priority: DataTypes.INTEGER
  });

  Badge.associate = function(models) {
    
    Badge.belongsTo(models.Action, {
      foreignKey: 'action_id'
    })

    Badge.belongsTo(models.Upload, {
      foreignKey: 'upload_id'
    })

    Badge.hasOne(models.PrizeEntry, {
      foreignKey: 'badge_id'
    })
  }
  return Badge;
};