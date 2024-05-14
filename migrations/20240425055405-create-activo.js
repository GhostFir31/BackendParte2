'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idActivo: {
        type: Sequelize.STRING
      },
      numSerie: {
        type: Sequelize.STRING
      },
      numInventario: {
        type: Sequelize.STRING
      },
      tipoActivo: {
        type: Sequelize.STRING
      },
      descripcionActivo: {
        type: Sequelize.STRING
      },
      ubicacion: {
        type: Sequelize.STRING
      },
      responsable: {
        type: Sequelize.STRING
      },
      imagenActivo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activos');
  }
  
};

