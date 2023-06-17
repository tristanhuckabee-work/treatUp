'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsTo(models.User, { foreignKey: 'organizerid' });
      Group.belongsToMany(models.User, {
        through: models.Member,
        foreignKey: 'groupId',
        otherKey: 'memberId',
      });
      Group.hasMany(models.Venue, {
        foreignKey: 'groupId',
        onDelete: 'CASCADE'
      });
      Group.hasMany(models.Event, {
        foreignKey: 'groupId',
        onDelete: 'CASCADE'
      });
    }
  }
  Group.init({
    organizerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 60],
          msg: 'Name must be 60 characters or less'
        },
        notEmpty: {
          msg: 'Name must be 60 characters or less'
        }
      }
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [50, 256],
          msg: 'About must be 50 characters or more'
        },
        notEmpty: {
          msg: 'About must be 50 characters or more'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['Online', 'In person']],
          msg: "Type must be 'Online' or 'In person'"
        }
      }
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        isBoolean(value) {
          if (value !== true && value !== false) throw new Error('Private must be a boolean');
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'City is required' }
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'State is required' }
      }
    },
    previewImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Group',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
  });
  return Group;
};