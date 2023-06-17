'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Images' };
if (env === 'production') { opts.schema = process.env.SCHEMA }

const groupImages = [];
const eventImages = [];
const images = [...groupImages, ...eventImages];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, images, {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(opts, {}, {});
  }
};