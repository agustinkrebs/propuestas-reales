module.exports = (sequelize, DataTypes) => {
  const post_ministries = sequelize.define('post_ministries', {
    registeredAt: DataTypes.DATE,
  }, {});

  post_ministries.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return post_ministries;
};
