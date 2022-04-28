/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('docs').del()
  await knex('docs').insert([
    {id: 1, document: 'rowValue1', date_time:"2022-04-29 09:00:00"},

  ]);
};
