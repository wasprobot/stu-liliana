const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'34.136.142.162',
        user: 'root',
        password:'mypassword',
        database:'Lab3DB'
    });
    return conn;
}
module.exports = newConnection;