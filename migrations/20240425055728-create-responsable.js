'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('responsables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idResponsable: {
        type: Sequelize.STRING
      },
      numEmpleado: {
        type: Sequelize.STRING
      },
      nombreEmpleado: {
        type: Sequelize.STRING
      },
      activosCustodia: {
        type: Sequelize.STRING
      },
      imagenResponsable: {
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
    await queryInterface.dropTable('responsables');
  }
  
};