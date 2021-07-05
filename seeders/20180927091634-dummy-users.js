'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Hedya Febrianti',
      email: 'hedya@mail.com',
      password: 123,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Indra Darmawa',
      email: 'hedya@mail.com',
      password: 123,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Hedya Febrianti',
      email: 'hedya@mail.com',
      password: 123,
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
