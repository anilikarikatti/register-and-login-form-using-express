const mysql = require('mysql2');

    const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'first_db',
    password:"root",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
// console.log(pool);

module.exports ={pool}