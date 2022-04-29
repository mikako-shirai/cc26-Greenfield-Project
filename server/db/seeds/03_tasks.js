/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('tasks').insert([
    {id: 1, task_name: 'Do the thing', task_info:"Get things done", date_time:"2022-04-29 09:00:00"},

  ]);
};
