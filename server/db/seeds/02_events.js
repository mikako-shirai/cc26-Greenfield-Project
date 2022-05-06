/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('events').insert([
    {id: 1, event_name: 'Cool event', description:"Super cool secret event", date_time:"2022-04-29 09:00:00"},
  ]);
};
