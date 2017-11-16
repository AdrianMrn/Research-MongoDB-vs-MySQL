var mysqlController = require('./controllers/mysql'); 
var mongodbController = require('./controllers/mongodb'); 

var async = require('async');

var amountToAdd = 0;
var timeStarted, timeEnded;
function start(amount) {
    amountToAdd = amount;
    timeStarted = Date.now();

    console.log("Script starting to add", amountToAdd, "documents/rows. Timestamp (ms) now is", timeStarted);
    createData(1);
}

//enkel wanneer testen op MongoDB
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/research_vgl_test_1");

function createData(i) {
    if (i == amountToAdd * 0.1 || i == amountToAdd * 0.2 || i == amountToAdd * 0.3 || i == amountToAdd * 0.4 || i == amountToAdd * 0.5 || i == amountToAdd * 0.6 || i == amountToAdd * 0.7 || i == amountToAdd * 0.8 || i == amountToAdd *0.9 ) {
        console.log("Time to add", i, "numbers:", Date.now()-timeStarted,"ms")
    }
    if (i <= amountToAdd) {
        var naam = getRandomString(10);
        var hoeveelheid = getRandomInt(0,1000);
        var opmerking = getRandomString(150);
        var kleur = getRandomKleur();

        var data = {naam: naam, hoeveelheid: hoeveelheid, opmerking: opmerking, kleur: kleur};

        // Een van deze 2 in comment zetten:
        /* mysqlController.saveData(data, function() {
            createData(i+1);
        }); */
        mongodbController.saveData(data, function() {
            createData(i+1);
        });
    } else {
        timeEnded = Date.now();
        var timeTook = timeEnded - timeStarted;
        var documentsPerSec = amountToAdd/(timeTook/1000);
        console.log("\nScript finished adding", amountToAdd, "documents/rows. Timestamp now is", timeEnded, "\nThe script took", timeTook, "ms.\nThat's", documentsPerSec, "documents or rows per second.");
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomKleur() {
    var kleuren = Array("rood","groen","blauw","paars","geel","oranje");
    var kleur = kleuren[Math.floor(Math.random()*kleuren.length)];
    return kleur;
}
function getRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

start(500000);