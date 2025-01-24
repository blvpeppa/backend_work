const mysql=require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'users',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const db = connection.promise();
module.exports = db;