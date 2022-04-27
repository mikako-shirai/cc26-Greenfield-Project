// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// module.exports = {
//   development: {
//     client: "pg",
//     connection: {
//       database: "cocoonmorph",
//       user:   "postgres",
//       password: null
//     },
//     // migrations: {
//     //   directory: "./data/migrations",
//     // },
//     // seeds: { directory: "./data/seeds" },
//   },
//   production: {
//     client: "pg",
//     connection: {
//       connectionString: process.env.DATABASE_URL,
//       ssl: { rejectUnauthorized: false },
//     },
//     migrations: {
//       directory: "./data/migrations",
//     },
//   },
// };