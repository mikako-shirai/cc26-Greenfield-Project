/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  
  await knex('calendar').insert([
    {id: 1, userId: 'rowValue1', date: "", events:""},
    {id: 2, userId: 'rowValue2', date: "", events:""},
    {id: 3, userId: 'rowValue3', date: "", events:""}
  ]);
};
