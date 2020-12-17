'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sightings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unicornId: {
        type: Sequelize.INTEGER
      },
      unicornImg: {
        type: Sequelize.STRING
      },
      unicornName: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.INTEGER
      },
      lon: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sightings');
  }
};