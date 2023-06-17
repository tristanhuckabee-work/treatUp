'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.Venue, { foreignKey: 'venueId' });
      Event.belongsTo(models.Group, { foreignKey: 'groupId' });
    }
  }
  Event.init({
    groupId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      validate: { len: [5, 50] }
    },
    description: DataTypes.STRING,
    type: DataTypes.ENUM('In Person', 'Online', 'Hybrid'),
    capacity: DataTypes.INTEGER,
    price: DataTypes.STRING,
    previewImage: DataTypes.STRING,
    startDate: {
      type: DataTypes.DATE,
      validate: {
        isAfterToday(value) {
          if (value < new Date()) {
            throw new Error('Start date cannot be before today.');
          }
        }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      isAfterStartDate(value) {
        if (value && value < this.startDate) {
          throw new Error('End date cannot be before start date.');
        }
      }
    }
  }, {
  sequelize,
  modelName: 'Event',
});
return Event;
};