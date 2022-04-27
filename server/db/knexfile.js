module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "ccpixels",
      user:   "postgres",
      password: null
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
