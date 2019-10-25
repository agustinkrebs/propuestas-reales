module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('post_ministries', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    ministryId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'ministries',
        key: 'id',
      },
    },
    postId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'posts',
        key: 'id',
      },
    },
    registeredAt: {
      type: Sequelize.DATE,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('post_ministries'),
};
