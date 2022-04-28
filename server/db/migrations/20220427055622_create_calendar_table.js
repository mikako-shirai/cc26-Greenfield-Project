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
            table.integer("day");
            table.integer("month");
            table.integer("year");
            table.string("dayOfWeek");
            table.time("time");
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable("calendar");
};
