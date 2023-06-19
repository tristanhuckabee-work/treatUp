'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Attendees'};
if (env === 'production') { opts.schema = process.env.SCHEMA }
const attendees = [
  {
    eventId:1,
    userId:1,
    status:'Attending'
  },
  {
    eventId:1,
    userId:2,
    status:'Waitlisted'
  },
  {
    eventId:1,
    userId:3,
    status:'Pending'
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, attendees, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(opts, {}, {});
  }
};
