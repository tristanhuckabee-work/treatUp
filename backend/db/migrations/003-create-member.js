'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Members'};
if (env === 'production') { opts.schema = process.env.SCHEMA }

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Members', {
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
      memberId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('Co-Host', 'Member', 'Pending'),
        defaultValue: 'Pending'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, opts);
  },
  async down(queryInterface, Sequelize) { await queryInterface.dropTable(opts) }
};