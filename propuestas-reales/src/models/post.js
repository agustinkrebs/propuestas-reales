module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    privacy: DataTypes.INT,
  }, {});

  post.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return post;
};
