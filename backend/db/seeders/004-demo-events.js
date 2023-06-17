'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Events'};
if (env === 'production') { opts.schema = process.env.SCHEMA }

const events = [
  {
    groupId:1,
    venueId:1,
    name:'Test Event',
    description:'Testing',
    type:'Online',
    startDate:'2024-01-01',
    endDate:'2024-01-01'
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, events, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(opts, {}, {});
  }
};
