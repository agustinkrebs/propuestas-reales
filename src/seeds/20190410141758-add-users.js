module.exports = {
  up(queryInterface) {
  const usersData = [
    {
      mail: 'vjlira@uc.cl',
      password: '$2b$10$8h8FH14qQkC8HwEkR.qjdeypBQpBxhOv9iU3gVBe9W0MkiYLSK1FC',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      password: '$2b$10$gdqMLMNGXz8Rks.9gR0JW.mU1/ICHo3eMM5fHFN8msPrXcBdFttSi',
      mail: 'jeichholz@uc.cl',
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
