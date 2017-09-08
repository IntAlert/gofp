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
        'Actions',
        'priority',
        {
          type: Sequelize.INTEGER,
          defaultValue:0
        }
      ),

      queryInterface.addColumn(
        'Actions',
        'promoted',
        {
          type: Sequelize.BOOLEAN,
          defaultValue:false
        }
      ),

      queryInterface.addColumn(
        'Actions',
        'promoted_priority',
        {
          type: Sequelize.INTEGER,
          defaultValue:0
        }
      ),

      queryInterface.addColumn(
        'Badges',
        'promoted',
        {
          type: Sequelize.BOOLEAN,
          defaultValue:false
        }
      ),

      queryInterface.addColumn(
        'Badges',
        'promoted_priority',
        {
          type: Sequelize.INTEGER,
          defaultValue:0
        }
      ),
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
