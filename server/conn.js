const mysql = require("mysql2");

connection = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "gridpainters",
  password: "gridpainters",
  database: "gridpainters",
});

module.exports = connection;
