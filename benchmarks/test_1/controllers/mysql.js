var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'research_vgl_test_1'
});

exports.saveData = function(data, next) {
    connection.query('INSERT INTO data SET ?', data, function (error, results, fields) {
        if (error) throw error;
        next();
    });
}