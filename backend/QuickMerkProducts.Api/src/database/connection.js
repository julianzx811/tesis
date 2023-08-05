var sql = require("mssql");

const dbSettings = {
  user: "yuli",
  password: "7878",
  server: "localhost",
  database: "QuickMerkProducts",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
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
