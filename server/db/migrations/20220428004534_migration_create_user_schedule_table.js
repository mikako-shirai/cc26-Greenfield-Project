/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema
    .createTable("user_schedule", function (table) {
        table.increments("id").primary();
        table.foreign("userId"); // gets from user table;
        table.datetime("date");
        table.foreign("eventId");
        table.foreign("taskId");
        table.foreign("docId"); //from doc table? TODO later
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
