'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Attendees'};
if (env === 'production') { opts.schema = process.env.SCHEMA }

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attendees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('Attending','Waitlisted','Pending')
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
    await queryInterface.dropTable('Attendees');
  }
};