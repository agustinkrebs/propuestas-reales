module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    privacy: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    instagram: DataTypes.STRING,
    type: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {});

  post.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    post.belongsToMany(models.ministry, { through: models.postMinistry, foreignKey: 'postId' });
  };

  return post;
};
