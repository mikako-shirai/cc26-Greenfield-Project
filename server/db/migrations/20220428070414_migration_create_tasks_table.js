/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("tasks", function (table) {
    table.increments("id").primary();
    table.string("task_name");
    table.string("task_info");
    table.datetime("date_time");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable("tasks");
};
