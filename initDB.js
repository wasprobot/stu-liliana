const mysql = require('mysql');

let conn = mysql.createConnection({
    host:'34.136.142.162',
    user: 'root',
    password:'mypassword',
    database:'Lab3DB'
});

conn.connect();

conn.query(`CREATE TABLE Slots (
    id MEDIUMINT NOT NULL AUTO_INCREMENT, 
    date datetime
    PRIMARY KEY (id))`);

conn.query(`CREATE TABLE Appointments (
    id MEDIUMINT NOT NULL AUTO_INCREMENT, 
    slotId MEDIUMINT
    name varchar(255)
    PRIMARY KEY (id))`);

conn.end();
