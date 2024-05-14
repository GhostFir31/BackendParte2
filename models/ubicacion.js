'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ubicacion.hasMany(models.Activo, { foreignKey: 'ubicacionId' });
    }
  }
  ubicacion.init({
    idUbicacion: DataTypes.STRING,
    descripcionUbicacion: DataTypes.STRING,
    activosAsociados: DataTypes.STRING,
    imagenUbicacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ubicacion',
  });
  return ubicacion;
};