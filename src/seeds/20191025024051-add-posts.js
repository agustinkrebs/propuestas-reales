module.exports = {
  up(queryInterface) {
    const usersData = [
      {
        status: 'aprobado',
        privacy: '',
        email: 'usuario 1',
        instagram: 'insta usuaior',
        type: 'es el tipo',
        body: 'me parecebee akjfnkdjf',
        autorCambio: '',
        createdAt: new Date(),
        updatedAt: new Date(),
  
      },
      {
        status: 'rechazado',
        privacy: '',
        email: 'usuario 2',
        instagram: 'insta usuaior',
        type: 'es el tipo',
        body: 'me parecebee kajsbakjdbaskjdbaskjdbakb',
        autorCambio: '',
        createdAt: new Date(),
        updatedAt: new Date(),
  
      },
      {
        status: 'pendiente',
        privacy: '',
        email: 'usuario 4',
        instagram: 'insta usuaior',
        type: 'es el tipo',
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
