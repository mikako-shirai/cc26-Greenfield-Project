// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "cocoonmorpho",
      user: "postgres",
      password: null
    },
    migrations: {
      directory: "./server/db/migrations",
    },
    seeds: { directory: "./server/db/seeds" },
    
  },

  staging: {
    client: "pg",
    connection: {
      database: 'cocoonmorpho',
      user: 'username',
      password: 'password'
    },
    migrations: {
      directory: "./server/db/migrations",
    },
    seeds: { directory: "./server/db/seeds" },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./server/db/migrations",
    },
  }
};
