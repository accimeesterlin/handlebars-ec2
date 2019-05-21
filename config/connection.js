const mysql = require('mysql');
let connection = mysql.createConnection('mysql://wb4744efh6z2adpu:shrnnob0qfi8f4ol@muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/yfwezmnpidpeslyx');;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root1',
//         password: '',
//         database: 'burgers_db'
//     });
// }


connection.connect();

module.exports = connection;