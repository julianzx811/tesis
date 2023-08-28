var sql = require("mssql");
require("dotenv").config();

const dbSettings = {
  user: process.env.user,
  password: process.env.password,
  server: process.env.server,
  port: 1433,
  database: process.env.database,
  authentication: {
    type: process.env.type,
  },
  options: {
    encrypt: true,
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getConnection };
