/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {  
  await knex('user').insert([
    {id: 1, email: 'miguelito@yomail.com', username: "miguelito", first_name:"Miguel", last_name:"Long", password:"1234"},
    {id: 2, email: 'lucasfire@yomail.com', username: "firelucas", first_name:"Lucas", last_name:"Flamel", password:"4567"},
    {id: 3, email: 'maxineko@yomail.com', username: "maxinekoala", first_name:"Maxine", last_name:"Ko", password:"456789"}
  ]);
};
