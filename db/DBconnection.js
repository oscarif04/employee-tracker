const mysql = require("mysql2");

const DBconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swiftdeadly2@",
  database: "employee_db"
});

DBconnection.connect(function (err) {
  if (err) throw err;
});

module.exports = DBconnection;