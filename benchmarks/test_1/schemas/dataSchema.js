var mongoose = require('mongoose');
Schema = mongoose.Schema;

var dataSchema = new Schema({
    naam: String,
    hoeveelheid: Number,
    opmerking: String,
    kleur: String,
});

module.exports = mongoose.model('data', dataSchema);