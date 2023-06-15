'use strict';
const bcrypt = require('bcryptjs');

const env = process.env.NODE_ENV;
let opts = { tableName: 'Users' };
if (env === 'production') { opts.schema = process.env.SCHEMA }

const monsters = [
  {
    email: 'demo@user.io',
    userName: 'yung-demo',
    firstName: 'Yung',
    lastName: 'Demo',
    hashedPass: bcrypt.hashSync('password')
  },
  {
    email: 'fstein95@user.io',
    userName: 'FrankenStein',
    firstName: 'Frank',
    lastName: 'Stein',
    hashedPass: bcrypt.hashSync('password2')
  },
  {
    email: 'dracula@user.io',
    userName: 'TheRealDracula',
    firstName: 'Vladimir',
    lastName: 'Tepes',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'bayouBill@user.io',
    userName: 'SwampThang',
    firstName: 'Billy',
    lastName: 'Rodgers',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'elizabeth.bathory@user.io',
    userName: 'BloodyMary',
    firstName: 'Elizabeth',
    lastName: 'Bathory',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'petronilla@user.io',
    userName: 'WitchingPower',
    firstName: 'Petronilla',
    lastName: 'de Meath',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'egyptianKing10@user.io',
    userName: 'ankhtifi',
    firstName: 'Nomarch',
    lastName: 'Ankhtifi',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'davidk81@user.io',
    userName: 'MovieWolf81',
    firstName: 'David',
    lastName: 'Kessler',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'extraman2001@user.io',
    userName: 'Green-n-Mean',
    firstName: 'Helen',
    lastName: 'Benson',
    hashedPass: bcrypt.hashSync('password3')
  },
]
const heros = [
  {
    email: 'edward.teach@user.io',
    userName: 'Blackbeard',
    firstName: 'Edward',
    lastName: 'Teach',
    hashedPass: bcrypt.hashSync('password')
  },
  {
    email: 'moonguy69@user.io',
    userName: 'Moon King',
    firstName: 'Buzz',
    lastName: 'Aldrin',
    hashedPass: bcrypt.hashSync('password2')
  },
  {
    email: 'tomoe1561@user.io',
    userName: 'RealNinja',
    firstName: 'Tomo',
    lastName: 'Sukesada',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'antony.stark@user.io',
    userName: 'IronMan',
    firstName: 'Tony',
    lastName: 'Stark',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'dPrince@user.io',
    userName: 'Wonderwoman',
    firstName: 'Diana',
    lastName: 'Prince',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'vhawkins@user.io',
    userName: 'Static',
    firstName: 'Virgil',
    lastName: 'Hawkins',
    hashedPass: bcrypt.hashSync('password3')
  },
  {
    email: 'peterparker@user.io',
    userName: 'Spiderman',
    firstName: 'Peter',
    lastName: 'Parker',
    hashedPass: bcrypt.hashSync('password3')
  },
]

const users = [...monsters, ...heros, ]
const userNames = users.map(user => user.userName);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(opts, users, {});
  },
  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(opts, {
      username: { [Op.in]: userNames }
    }, {});
  }
};
