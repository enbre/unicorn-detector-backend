'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sighting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.sighting.belongsTo(models.unicorn)
    }
  };
  sighting.init({
    unicornId: DataTypes.INTEGER,
    unicornImg: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sighting',
  });
  return sighting;
};