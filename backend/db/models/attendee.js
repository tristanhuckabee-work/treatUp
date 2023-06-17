'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attendee extends Model {
    static associate(models) {}
  }
  Attendee.init({
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.ENUM('Attending','Waitlisted','Pending')
  }, {
    sequelize,
    modelName: 'Attendee',
  });
  return Attendee;
};