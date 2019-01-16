const mysql = require('mysql2');
const port = process.env.PORT || 3000;

const connectArgs = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'anonymous'
};

const databaseManager = mysql.createPool(connectArgs);

module.exports = databaseManager;