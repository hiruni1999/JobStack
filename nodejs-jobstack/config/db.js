const mysql = require('mysql');
const keys = require('./keys');

const con = mysql.createConnection({
    host: keys.db.host,
    user: keys.db.user,
    password: keys.db.password,
    database: keys.db.database
});

module.exports = con;