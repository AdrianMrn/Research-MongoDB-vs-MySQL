var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var dataSchema = require('../schemas/dataSchema');

exports.saveData = function(data, next) {
    var newdata = new dataSchema(data);
    newdata.save(function (error) {
        if (error) throw error;
        next();
    });
}