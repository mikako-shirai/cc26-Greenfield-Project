/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("calendar", function (table) {
            table.increments("id").unique().notNullable();
            table.integer("userId"); // gets from user table;
            table.date("date");
            table.string("events");
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable("calendar");
};
