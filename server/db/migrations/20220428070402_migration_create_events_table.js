/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("events", function (table) {
        table.increments("id").primary();
        table.string("event_name");
        table.string("description");
        table.datetime("date_time");
    })
  
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("events");
};
