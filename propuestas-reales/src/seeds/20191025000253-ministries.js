
module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const ministriesData = [
      {
        ministry: 'Economía, Fomento y Turismo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Salud',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Mujer y la Equidad de Género',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Hacienda',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Desarrollo Social y Familia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Trabajo y Previsión Social',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Vivienda y Urbanismo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Transportes y Telecomunicaciones',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Defensa Nacional',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Educación',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Obras Públicas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Ciencia, Tecnología, Conocimiento e Innovación',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Interior y Seguridad Pública',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Secretaría General de Gobierno',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Justicia y Derechos Humanos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Minería',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Energía',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Relaciones Exteriores',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Medio Ambiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Culturas, las Artes y el Patrimonio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Secretaría General de la Presidencia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Agricultura',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Bienes Nacionales',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ministry: 'Deporte',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('ministries', ministriesData);
  },

  down: (queryInterface) => queryInterface.bulkDelete('ministries', null, {}),
};
