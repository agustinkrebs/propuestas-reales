'use strict';
module.exports = (sequelize, DataTypes) => {
  const vote = sequelize.define('vote', {
    postId: DataTypes.INTEGER,
    userIp: DataTypes.STRING,
    urgency: DataTypes.INTEGER,
    affinity: DataTypes.INTEGER
  }, {});
  vote.associate = function(models) {
    // associations can be defined here
  };
  return vote;
};