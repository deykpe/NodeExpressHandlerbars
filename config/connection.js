var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '2890768@Bc',
    database: 'burgers_db'
})

connection.connect(function(error) {
    console.log('database connected')
})

module.exports = connection