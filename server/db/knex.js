const knexConfig = require("../../knexfile");
const environment = knexConfig[process.env.NODE_ENV || "development"];
const knex = require("knex")(environment);
// // get a knex configuration, defaulting to development
// var knexConfig = mysqlConfig[process.env.NODE_ENV || "development"];

// // initialize knex with the configuration for the environment
// var knex = require("knex")(knexConfig);

// // export the initialized knex object
// module.exports = knex;

module.exports = knex;
