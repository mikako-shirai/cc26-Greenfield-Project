/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable('user_schedule', function (table) {
        table.integer("eventId").references("id").inTable("events").notNullable();
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('user_schedule', function (table) {
        table.dropColumn('eventId');
    })
};
