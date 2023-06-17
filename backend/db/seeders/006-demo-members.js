'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Members'};
if (env === 'production') { opts.schema = process.env.SCHEMA }

const members = [
  {
    groupId:1,
    memberId:2,
    status:'Member'
  },
  {
    groupId:1,
    memberId:3,
    status:'Co-Host'
  },
  {
    groupId:1,
    memberId:4,
    status:'Pending'
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, members, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(opts, {}, {});
  }
};

