'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Images' };
if (env === 'production') { opts.schema = process.env.SCHEMA }

const groupImages = [];
const eventImages = [
  {
    url: 'https://res.cloudinary.com/dzsgront4/image/upload/v1686805183/pexels-iv%C3%A1n-rivero-1599469_upsanl.jpg',
    imageableType:'Event',
    imageableId:1
  }
];
const images = [...groupImages, ...eventImages];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, images, {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(opts, {}, {});
  }
};