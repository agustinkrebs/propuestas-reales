module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    privacy: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    instagram: DataTypes.STRING,
    type: DataTypes.STRING(1000),
    body: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
    approval: DataTypes.BOOLEAN
  }, {});

  post.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    post.belongsToMany(models.ministry, { through: models.post_ministries, foreignKey: 'postId' });
  };

  return post;
};
