const mysql = require("mysql2");

connection = mysql.createConnection({
 host: "localhost",
 port: "3306",
 user: "admin",
 password: "admin",
 database: "gridpainter",
});




module.exports = connection;