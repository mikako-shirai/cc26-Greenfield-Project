/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("user_schedule", function (table) {
            table.increments("id").primary();
            table.integer("userId").references("id").inTable("user").notNullable();
            table.datetime("date");
            // table.integer("eventId").references("id").inTable("events").notNullable();
            table.integer("taskId").references("id").inTable("tasks").notNullable();
            table.integer("docId").references("id").inTable("docs").notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable("user_schedule");
};
