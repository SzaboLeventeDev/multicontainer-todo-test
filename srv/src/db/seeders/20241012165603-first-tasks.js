'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert('tasks', [
      {
        id: 1,
        name: 'Create separate containers by environment.',
        state: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Read documentation about containers.',
        state: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Add information label to the frontend when no tasks are available.',
        state: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Read topics about CI/CD pipelines.',
        state: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // Sync the sequence after seeding
    await queryInterface.sequelize.query(
      `SELECT setval(pg_get_serial_sequence('tasks', 'id'), MAX(id)) FROM tasks;`
    );
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
