'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Images'};
if (env === 'production') { opts.schema = process.env.SCHEMA }

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      preview: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      imageableType: {
        allowNull: false,
        type: Sequelize.ENUM('Group', 'Event')
      },
      imageableId: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Images');
  }
};