'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Sector, {
        foreignKey: "companyId",
        targetKey: "companyId"

      });
    }
  }
  Companies.init({
    companyId: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    companyName: DataTypes.STRING,
    ceoName: DataTypes.STRING,
    companyScore: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};