/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {


  await knex('user_schedule').insert([
    { id: 1, userId: 1, date: "2022-04-29 09:00:00", eventId: 1, taskId: 1, docId: 1 },

  ]);
};
