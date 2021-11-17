const mysql = require('mysql');

let conn = mysql.createConnection({
    host:'34.136.142.162',
    user: 'root',
    password:'mypassword',
    database:'Lab3DB'
});

conn.connect();

conn.end();
