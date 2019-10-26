'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const postData = [
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/cambio a un Proyecto de Ley',
              body: 'Que los parlamentarios reduzcan su numero a máximo 40, senadores dos por regiones muy pobladas y 1 por el resto de las regiones ',
              approved: false,
              rating: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'David.ag.y@hotmail.cl',
              instagram: 'David.ag.y',
              type: 'Proyecto ciudadano',
              body: 'Realizar consultas ciudadanas estilo plebiscito , al momento de tomar decisiones en temas sociales y que pueden afectar a la comunidad , temas como el aborto , sueldos de parlamentarios (aumento o disminución ), matrimonio igualitario  o temas de similare',
              approved: false,
              rating: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      
      ];
      
    /*

      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('posts', postData);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('posts', null, {});

  }
};
