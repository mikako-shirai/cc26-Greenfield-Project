/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  
  await knex('calendar').insert([
    {id: 1, userId: '1', date: "2022-04-29", day:"29", month:"04", year:"2022", dayOfWeek:"Monday", time:"12:00"},
    {id: 2, userId: '1', date: "2022-04-30", day:"30", month:"04", year:"2022", dayOfWeek:"Monday", time:"09:00"},
    {id: 3, userId: '1', date: "2022-05-01", day:"01", month:"05", year:"2022", dayOfWeek:"Monday", time:"11:00"}
  ]);
};
