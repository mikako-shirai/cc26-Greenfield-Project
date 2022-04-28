/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema
    .createTable("user_schedule", function (table) {
        table.increments("id").unique().notNullable();
        table.integer("userId"); // gets from user table;
        table.date("date");
        table.time("time");
        table.string("events");
        table.string("tasks");
        table.integer("docs"); //from doc table? TODO later
        table.string("comments");
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("user_schedule");
};
