/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema
    .createTable("user_schedule", function (table) {
        table.increments("id").unique().notNullable();
        table.integer("userId"); // gets from user table;
        table.date("date");
        table.string("events");
        table.string("tasks");
        table.string("docs");
        table.string("info");
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("user_schedule");
};
