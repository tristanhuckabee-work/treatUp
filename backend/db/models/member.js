'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    
    static associate(models) {
    }
  }
  Member.init({
    groupId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER,
    status: DataTypes.ENUM('Co-Host', 'Member', 'Pending')
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};