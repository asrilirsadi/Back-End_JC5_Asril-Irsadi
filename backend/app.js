const express = require('express');
const bodyParser = require('body-parser');

const mysql = require('mysql');
const db = mysql.createConnection(
{
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'latihan_logreg_resto'
});
db.connect();

var app = express();
var port = 8000;

app.listen(port, () => 
{
    console.log(`Server berjalan di ${port} ...`);
});

app.get('/', (req,res) => 
{
    
})