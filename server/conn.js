const mysql = require("mysql2");

connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "gridpainter",
  password: "gridpainter",
  database: "gridpainters",
});

module.exports = connection;
