require("dotenv").config(); // Load environment variables

module.exports = {
  development: {
    url: process.env.DATABASE_URL, // Use the DATABASE_URL from .env
    dialect: "postgres", // Specify the database dialect
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
