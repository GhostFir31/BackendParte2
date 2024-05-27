const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'backenduser',
    password: 'superpassword',
    database: 'empresa'
});

module.exports = pool;