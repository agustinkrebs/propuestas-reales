'use strict';
module.exports = (sequelize, DataTypes) => {
  const vote = sequelize.define('vote', {
    postId: DataTypes.INTEGER,
    userIp: DataTypes.STRING,
    urgency: { type: DataTypes.INTEGER, allowNull: true },
    affinity: { type: DataTypes.INTEGER, allowNull: true },
  }, {});
  vote.associate = function(models) {
    // associations can be defined here
  };
  return vote;
};