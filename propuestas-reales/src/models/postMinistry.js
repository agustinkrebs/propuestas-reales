module.exports = (sequelize, DataTypes) => {
  const postMinistry = sequelize.define('postMinistry', {
    registeredAt: DataTypes.DATE,
  }, {});

  postMinistry.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return postMinistry;
};
