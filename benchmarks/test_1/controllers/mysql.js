var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'research_vgl_test_1'
});
 
/* connection.connect(); */

exports.saveData = function(data, i, next) {
    connection.query('INSERT INTO data SET ?', data, function (error, results, fields) {
        if (error) throw error;
        console.log('MySQL: file added: ', i);
        next();
    });
}

 
/* connection.end(); */