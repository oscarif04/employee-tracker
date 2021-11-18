const mysql = require("mysql2");

const DBconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swiftdeadly2@",
  database: "employees"
});

DBconnection.connect(function (err) {
  if (err) throw err;
});

module.exports = DBconnection;