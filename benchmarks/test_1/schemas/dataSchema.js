var mongoose = require('mongoose');
Schema = mongoose.Schema;

var localConnection = mongoose.createConnection('mongodb://localhost/research_vgl_test_1');

var dataSchema = new Schema({
    naam: String,
    hoeveelheid: Number,
    opmerking: String,
    kleur: String,
});

var data = localConnection.model('data', dataSchema);

module.exports = {
    data: data
};