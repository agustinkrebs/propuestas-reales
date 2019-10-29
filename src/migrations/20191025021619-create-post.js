module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    privacy: {
      type: Sequelize.BOOLEAN,
    },
    email: {
      type: Sequelize.STRING,
    },
    instagram: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.TEXT,
    },
    autorCambio: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    rating: {
      allowNull: false,
      type: Sequelize.INTEGER,
    }
  }),

  down: (queryInterface) => queryInterface.dropTable('posts'),
};
