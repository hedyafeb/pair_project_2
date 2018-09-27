'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [{
        name: 'Gempa Lombok',
        description : 'Pembangunan sarana pendidikan pasca gempa',
        target : 10000000,
        currentAmmount :0,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: 'Longsor Rinjani',
        description : 'Perbaikan jalur pendakian yg longsor',
        target : 5000000,
        currentAmmount :0,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: 'Taman Baca Desa Smurf',
        description : 'Membangun taman baca di kawasan pedalaman',
        target : 3000000,
        currentAmmount :0,
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});
  }
};
