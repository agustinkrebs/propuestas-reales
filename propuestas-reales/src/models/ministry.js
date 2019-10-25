module.exports = (sequelize, DataTypes) => {
  const ministry = sequelize.define('ministry', {
    ministry: DataTypes.STRING,
  }, {});

  ministry.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    ministry.belongsToMany(models.post, { through: models.postMinistry, foreignKey: 'ministryId' });
  };

  return ministry;
};