var express = require('express'),
    routes = require('./routes'),
    mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://ceitpr3g:ceitpr3g1906@ds027809.mongolab.com:27809/hayodb'),
    // db = mongoose.connect('mongodb://localhost/node_api'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    Ponto = require('./models/pdados.js').make(Schema, mongoose),
    Transporte = require('./models/tdados.js').make(Schema, mongoose),
    Hospedagem = require('./models/hdados.js').make(Schema, mongoose),
    Tranporte = require('./models/tdados.js').make(Schema, mongoose),
    Sobre = require('./models/sdados.js').make(Schema, mongoose),
    Restaurante = require('./models/rdados.js').make(Schema, mongoose),
    Utilidade = require('./models/udados.js').make(Schema, mongoose);

var app = module.exports = express.createServer();


// Configs
var config = require('./config')(app, express);


/// Routes

// Home
app.get('/', routes.index);

app.get('/pontos/', function (req, res) {
    res.contentType('application/json');

    Ponto.find({}, function (err, pontos) {

        if (err) throw err;

        res.send(pontos)

    })

});
// All users para hospedagems
app.get('/hosp/', function (req, res) {
    res.contentType('application/json');

    Hospedagem.find({}, function (err, hospedagems) {

        if (err) throw err;

        res.send(hospedagems)

    })

});
// All users Para Transportes
app.get('/transp/', function (req, res) {
    res.contentType('application/json');

    Transporte.find({}, function (err, transportes) {

        if (err) throw err;

        res.send(transportes)

    })

});
// All users Para Utilidades Publicas
app.get('/util/', function (req, res) {
    res.contentType('application/json');

    Utilidade.find({}, function (err, utilidades) {

        if (err) throw err;

        res.send(utilidades)

    })

});

// All users Para Sobre
app.get('/sobre/', function (req, res) {
    res.contentType('application/json');

    Sobre.find({}, function (err, sobres) {

        if (err) throw err;

        res.send(sobres)

    })

});

// All users Para Restaurantes
app.get('/resta/', function (req, res) {
    res.contentType('application/json');

    Restaurante.find({}, function (err, restaurantes) {

        if (err) throw err;

        res.send(restaurantes)

    })

});

// All users Para Pontos Turisticos
app.get('/util/', function (req, res) {
    res.contentType('application/json');

    Pontos.find({}, function (err, pontos) {

        if (err) throw err;

        res.send(pontos)

    })

});



var  port = process.env.PORT || CONFIG.port;
app.listen (port);
/*app.listen(3000, function () {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});*/
