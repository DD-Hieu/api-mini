var mysql = require('mysql');

var connection = mysql.createConnection({
        host:'37.59.55.185',
        user:'m6fSwgfB5H',
        password:'ang5dMJPuu',
        port: 3306,
        database:'m6fSwgfB5H'
});

connection.connect(function(err) {
    if(err) console.log("Kết nối CSDL không thành công")
});

module.exports = connection;