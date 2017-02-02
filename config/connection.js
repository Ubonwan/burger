var mysql = require('mysql');
console.log('connection.js connected');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Shellie01",
    database: "burgersdb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;