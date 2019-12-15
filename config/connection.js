var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '2890768@Bc',
    database: 'food'
})

connection.connect(function(error) {
    console.log('server running on port 8080')
})

module.exports = connection