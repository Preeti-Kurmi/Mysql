const mysql=require('mysql2');
const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'nodesql',
    password:'Sagar!@#123',
   
});
module.exports=pool.promise();
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'your_username',
//   password: 'your_password',
//   database: 'your_database',
// });