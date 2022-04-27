/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("user", function (table) {
            table.increments("id")
                .primary(); // Set this column as the primary key
            table.string("email", 32)
                .unique() // This is a constraint that prevents duplicate emails in the table
                .notNullable()
                .index(); // Adding an index makes searching by email faster
            table.string("username", 32)
                .unique()
                .notNullable();
            table.string("first_name", 32).notNullable();
            table.string("last_name", 32).notNullable();
            table.string("password", 32)
                .notNullable();

        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable("user");
};
