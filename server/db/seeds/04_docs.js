/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('docs').insert([
    {id: 1, document: 'http://knexjs.org/', date_time:"2022-04-29 09:00:00"},

  ]);
};
