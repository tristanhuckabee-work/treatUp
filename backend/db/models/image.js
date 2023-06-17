'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Group, {
        foreignKey: 'imageableId',
        constraints: false
      });
      Image.belongsTo(models.Event, {
        foreignKey: 'imageableId',
        constraints: false
      });
    }
  }
  Image.init({
    url: DataTypes.STRING,
    preview: DataTypes.BOOLEAN,
    imageableType: DataTypes.ENUM('Group','Event'),
    imageableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};