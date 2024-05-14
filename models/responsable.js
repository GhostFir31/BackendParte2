'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class responsable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Responsable.hasMany(models.Activo, { foreignKey: 'responsableId' });
    }
  }
  responsable.init({
    idResponsable: DataTypes.STRING,
    numEmpleado: DataTypes.STRING,
    nombre: DataTypes.STRING,
    imagenResponsable: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Responsable',
  });
  return responsable;
};