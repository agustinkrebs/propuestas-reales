module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    privacy: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    instagram: DataTypes.STRING,
    body: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
    type: DataTypes.STRING,
    autorCambio: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendiente',
    },
  }, {});

  post.associate = function associate(models) {
    // associations can be defined here. This method receives a models parameter.
    post.belongsToMany(models.ministry, { through: models.post_ministries, foreignKey: 'postId' });
  };

  return post;
};
