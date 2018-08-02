const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var upload = require('express-fileupload');
app.use(upload());

const koneksi  = require('cors');
app.use(koneksi());

const crypto = require('crypto');
const secret = 'abcdefg';

const mysql = require('mysql');
const db = mysql.createConnection(
{
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'auto_shop_new'
});
db.connect();

app.listen(8000);

app.post('/registeradmin', (req,res) => 
{
    var Username = req.body.username;
    var Password = req.body.password;
    var Email = req.body.email;
    var AdminStatus = 'user';

    console.log(`Username     : ${Username}`);
    console.log(`Password     : ${Password}`);
    console.log(`Email        : ${Email}`);
    console.log(`Admin Status : ${AdminStatus}`);

    var encpass = crypto.createHash('sha256', secret).update(Password).digest('hex');
    console.log(`Password setelah di encrypt : ${encpass}`);

    var registerData = `INSERT INTO user_admin SET Username="${Username}", Password="${encpass}", 
                        Email="${Email}", AdminStatus="${AdminStatus}"`;

    db.query(registerData,(err,result) =>
    {
        if (err) throw err;
    });
    res.end();
});

app.post('/loginadmin', (req,res) =>
{  
    var username = req.body.username;
    var password = req.body.password;

    console.log(`Username     : ${username}`);
    console.log(`Password     : ${password}`);
    
    var encpass = crypto.createHash('sha256', secret).update(password).digest('hex');
    console.log(`Password setelah di encrypt : ${encpass}`);

    var pullData = 'SELECT * FROM user_admin';
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;
        
        for(var i=0; i<result.length; i++)
        {
            if ((username === result[i].Username) && (encpass === result[i].Password) && (result[i].AdminStatus === 'admin'))
            {
                res.send(username);
                break;
            }
            else if(i === result.length-1 )
            {   
                console.log('Data tidak ditemukan, login gagal');
            }
        }
    })
});