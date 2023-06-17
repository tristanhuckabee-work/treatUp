'use strict';

const env = process.env.NODE_ENV;
let memberOpts = { tableName: 'Members'};
let attendOpts = { tableName: 'Attendees'};
if (env === 'production') {
  memberOpts.schema = process.env.SCHEMA;
  attendOpts.schema = process.env.SCHEMA;
}

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
const attendees = [
  {
    eventid:1,
    userId:1,
    status:'Attending'
  },
  {
    eventid:1,
    userId:2,
    status:'Waitlisted'
  },
  {
    eventid:1,
    userId:3,
    status:'Pending'
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(memberOpts, members, {});
    queryInterface.bulkInsert(attendOpts, attendees, {});
    return;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete(memberOpts, {}, {});
    queryInterface.bulkDelete(attendOpts, {}, {});
    return;
  }
};

