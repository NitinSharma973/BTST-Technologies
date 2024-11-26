"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert seed data for the 'Users' table
    return queryInterface.bulkInsert("Users", [
      {
        id: Sequelize.UUIDV4(), // Generate UUID automatically
        name: "John Doe",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Sequelize.UUIDV4(), // Generate UUID automatically
        name: "Jane Smith",
        email: "jane@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove the inserted users data during the rollback
    return queryInterface.bulkDelete("Users", null, {});
  },
};
