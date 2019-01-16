const mysql = require('mysql2');
const port = process.env.PORT || 3000;

const connect_args = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root'
};

let connection;

if (port === 3000) {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'test-db'
    });
} else {
    //same as above, with live server details
}
connection.connect();

module.exports = connection;