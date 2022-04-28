/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('user_schedule').del();
  await knex('events').del()
  await knex('tasks').del();
  await knex('docs').del();
  await knex('user').del();
 
};
