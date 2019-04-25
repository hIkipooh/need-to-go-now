module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/needtogonow",
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    useNullAsDefault: true
  },

  test: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "needtogonow"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds/test"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    useNullAsDefault: true
  }
};
