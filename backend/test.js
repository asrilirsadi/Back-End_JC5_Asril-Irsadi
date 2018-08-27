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

// var adminID  = 4;

// var pullData = `SELECT Username FROM user_admin WHERE id="${adminID}"`;
// db.query(pullData, (err,result) =>
// {
//     if (err) throw err;

//     console.log(`Username = ${result[0].Username}`);
// });

// var pullData = `SELECT * FROM master_merk`;
// db.query(pullData, (err,result) =>
// {
//     if (err) throw err;

//     console.log(result);
// })

var pullData = `SELECT * FROM master_merk ORDER BY merk`;
db.query(pullData, (err,result) =>
{
    if (err) throw err;

    console.log(result);
    
})