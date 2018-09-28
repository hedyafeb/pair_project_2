'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Transactions','ammount');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Transactions','amount',{
      type: Sequelize.INTEGER,
    });
  }
};
