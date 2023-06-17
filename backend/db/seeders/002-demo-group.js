'use strict';

const env = process.env.NODE_ENV;
let opts = { tableName: 'Groups' };
if (env === 'production') { opts.schema = process.env.SCHEMA }

const public = [
  { name: 'Hero Squad',
    organizerId:1,
    about: "If you're dressing as a hero this Halloween then this is the group for you!",
    type: 'Remote',
    private: false,
    city: 'NA',
    state: 'NA',
    country: 'NA',
    previewImage: 'https://res.cloudinary.com/dzsgront4/image/upload/v1686805353/everyday-heros_covvol.jpg'
  }
];
const private = [
  { name: "Exquisite Corpse",
    organizerId:3,
    about: "We're a group of totally not real monsters that hang out on our very special day.",
    type: 'In Person',
    private: true,
    city: 'Sighisoara',
    state: 'Mures',
    country: 'Romania',
    previewImage: 'https://res.cloudinary.com/dzsgront4/image/upload/v1686805183/pexels-iv%C3%A1n-rivero-1599469_upsanl.jpg'
  }
];

const groups = [...public, ...private];
const groupNames = groups.map(group => group.name);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, groups, {});
  },
  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(opts, {
      name: { [Op.in] : groupNames }
    }, {});
  }
};
