'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn(
        'Badges',
        'action_id',
        {
          type: Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'PrizeEntries',
        'action_id',
        {
          type: Sequelize.INTEGER
        }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};