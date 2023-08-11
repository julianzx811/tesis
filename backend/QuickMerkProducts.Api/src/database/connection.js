var sql = require("mssql");
require("dotenv").config();
// const dbSettings = {
//   user: "yuli",
//   password: "7878",
//   server: "localhost",
//   database: "QuickMerkProductsDB",
//   options: {
//     encrypt: true, // for azure
//     trustServerCertificate: true, // change to true for local dev / self-signed certs
//   },
// };

const dbSettings = {
  user: process.env.user, // better stored in an app setting such as process.env.DB_USER
  password: process.env.password, // better stored in an app setting such as process.env.DB_PASSWORD
  server: process.env.server, // better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: process.env.database, // better stored in an app setting such as process.env.DB_NAME
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
