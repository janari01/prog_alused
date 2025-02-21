'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: "Introduction to Ashtanga",
        slug: "introduction-to-ashtanga",
        image: "ashtanga.jpg",
        body: "<p>random words random words random words random words random words random words random words random words random words random words random words random words random words random words</p>",
        published: "2020-01-10 19:02:30",
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: "Introduction to C",
        slug: "introduction-to-c",
        image: "morning.jpg",
        body: "<p>random words random words random words random words random words random words random words random words random words random words random words random words random words random words</p>",
        published: "2021-02-08 11:04:30",
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: "Introduction to cpp",
        slug: "introduction-to-cpp",
        image: "yoga-teacher.jpg",
        body: "<p>random words random words random words random words random words random words random words random words random words random words random words random words random words random words</p>",
        published: "2022-08-04 13:02:30",
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {})
  }
};
