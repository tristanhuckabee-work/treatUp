'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Events'};
if (env === 'production') { opts.schema = process.env.SCHEMA }

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      groupId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      venueId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM('In Person', 'Online', 'Hybrid')
      },
      capacity: {
        allowNull: false,
        defaultValue: 1000000,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        defaultValue: '0.00',
        type: Sequelize.STRING
      },
      previewImage: {
        type: Sequelize.STRING
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    opts);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};