'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
          name: 'Mart Mets',
          createdAt: new Date(),
          updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
          name: 'Mets Mart',
          createdAt: new Date(),
          updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
          name: 'Martin Tamm',
          createdAt: new Date(),
          updatedAt: new Date()
      }]),
  ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {})
  }
};
