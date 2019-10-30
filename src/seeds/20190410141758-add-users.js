const bcrypt = require('bcrypt');
const PASSWORD_SALT = 10;

module.exports = {
  up(queryInterface) {
  const usersData = [
    {
      mail: 'vjlira@uc.cl',
      password: bcrypt.hashSync("vicho?10", PASSWORD_SALT),
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      password: bcrypt.hashSync("jehp3597", PASSWORD_SALT),
      mail: 'jeichholz@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'amora2@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      password: bcrypt.hashSync("lennon", PASSWORD_SALT),
      mail: 'akrebs2@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'alfonso@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'felipe@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'julio@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'martin@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'josepedro@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'sebastiandelorenzo@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'sebastianmorales@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      password: bcrypt.hashSync("alfvegano", PASSWORD_SALT),
      mail: 'vicente@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },


  ];

  return queryInterface.bulkInsert('users', usersData);
  },

  down(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
