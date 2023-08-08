var sql = require("mssql");

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
  user: "yuli", // better stored in an app setting such as process.env.DB_USER
  password: "Caminoarusia7878$", // better stored in an app setting such as process.env.DB_PASSWORD
  server: "quickmerkpeopleserver.database.windows.net", // better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: "ProductsDB", // better stored in an app setting such as process.env.DB_NAME
  authentication: {
    type: "default",
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
