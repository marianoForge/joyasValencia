module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
<<<<<<< HEAD
        ca: env("DATABASE_CA"),
=======
        ca: env('DATABASE_CA'),
>>>>>>> 2f1b48c6dc38570c27f42d3606865dc6ea294d2f
      },
    },
    debug: false,
  },
});
