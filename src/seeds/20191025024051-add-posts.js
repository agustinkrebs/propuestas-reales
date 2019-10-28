module.exports = {
  up(queryInterface) {
    const usersData = [
      {
        status: 'aprobado',
        privacy: true,
        email: 'usuario 1',
        instagram: 'insta usuaior',
        type: '-',
        body: 'me parecebee akjfnkdjf',
        autorCambio: '',
        createdAt: new Date(),
        updatedAt: new Date(),
  
      },
      {
        status: 'rechazado',
        privacy: true,
        email: 'usuario 2',
        instagram: 'insta usuaior',
        type: '-',
        body: 'me parecebee kajsbakjdbaskjdbaskjdbakb',
        autorCambio: '',
        createdAt: new Date(),
        updatedAt: new Date(),
  
      },
      {
        status: 'pendiente',
        privacy: false,
        email: 'usuario 4',
        instagram: 'insta usuaior',
        type: '-',
        body: 'me parecebee kajsbakjdbaskjdbaskjdbakb',
        autorCambio: '',
        createdAt: new Date(),
        updatedAt: new Date(),
  
      },
    ];
  
    return queryInterface.bulkInsert('posts', usersData);
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
