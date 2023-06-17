'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Venues' };
if (env === 'production') { opts.schema = process.env.SCHEMA }

const venues = [
  {
    groupId: 1,
    address:'123 Test Street',
    city:'Test City',
    state:'CA',
    country:'USA',
    lat:50,
    lng:50
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, venues, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(opts, {}, {});
  }
};
