const knexConfig = require("../../knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";
const knex = require("knex")(knexConfig[environment]);

module.exports = knex;
