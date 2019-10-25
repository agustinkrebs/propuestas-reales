module.exports = (sequelize, DataTypes) => {
  const ministry = sequelize.define('ministry', {
    ministry: DataTypes.STRING,
  }, {});

  ministry.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return ministry;
};
