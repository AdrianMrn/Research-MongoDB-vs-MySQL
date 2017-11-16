var mysqlController = require('./controllers/mysql'); 
var mongodbController = require('./controllers/mongodb'); 

var async = require('async');

var amountToAdd = 0;
function start(amount) {
    amountToAdd = amount;
    createData(1);
}

function createData(i) {
    if (i < amountToAdd) {
        var data = {};

        mysqlController.saveData(data, function(i) {
            createData(i);
        });
        mongodbController.saveData(data, function(i) {
            createData(i);
        });
    }
}

start(100);