var express = require('express'),
    routes = require('./routes'),
    mongoose = require('mongoose'),
    
    db = mongoose.connect('mongodb://localhost/node_api'),
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

var config = require('./config')(app, express);

app.get('/', routes.index);

app.get('/pontos/', function (req, res) {
    res.contentType('application/json');

    Ponto.find({}, function (err, pontos) {

        if (err) throw err;

        res.send(pontos)

    })

});

app.get('/pontos/:_id', function (req, res) {
    res.contentType('application/json');

    Ponto.findOne({
        _id: req.params._id
    }, function (err, pontos) {

        if (pontos != null) {

            res.send(pontos)

        } else {

            res.render('404', {
                title: 'Registro não encontrado'
            })

        }
    })
})

app.get('/hosp/', function (req, res) {
    res.contentType('application/json');

    Hospedagem.find({}, function (err, hospedagems) {

        if (err) throw err;

        res.send(hospedagems)

    })

});

app.get('/hosp/:_id', function (req, res) {
    res.contentType('application/json');

    Hospedagem.findOne({
        _id: req.params._id
    }, function (err, hospedagems) {

        if (hospedagems != null) {

            res.send(hospedagems)

        } else {

            res.render('404', {
                title: 'Registro não encontrado'
            })

        }
    })
})

app.get('/transp/', function (req, res) {
    res.contentType('application/json');

    Transporte.find({}, function (err, transportes) {

        if (err) throw err;

        res.send(transportes)

    })

});

app.get('/transp/:_id', function (req, res) {
    res.contentType('application/json');

    Tranporte.findOne({
        _id: req.params._id
    }, function (err, transportes) {

        if (transportes != null) {

            res.send(transportes)

        } else {

            res.render('404', {
                title: 'Registro não encontrado'
            })

        }
    })
})

app.get('/util/', function (req, res) {
    res.contentType('application/json');

    Utilidade.find({}, function (err, utilidades) {

        if (err) throw err;

        res.send(utilidades)

    })

});

app.get('/util/:_id', function (req, res) {
    res.contentType('application/json');

    Utilidade.findOne({
        _id: req.params._id
    }, function (err, utilidades) {

        if (utilidades != null) {

            res.send(utilidades)

        } else {

            res.render('404', {
                title: 'Registro não encontrado'
            })

        }
    })
})

app.get('/sobre/', function (req, res) {
    res.contentType('application/json');

    Sobre.find({}, function (err, sobres) {

        if (err) throw err;

        res.send(sobres)

    })

});

app.get('/sobre/:_id', function (req, res) {
    res.contentType('application/json');

    Sobre.findOne({
        _id: req.params._id
    }, function (err, sobres) {

        if (sobres != null) {

            res.send(sobres)

        } else {

            res.render('404', {
                title: 'Registro não encontrado'
            })

        }
    })
})

app.get('/resta/', function (req, res) {
    res.contentType('application/json');

    Restaurante.find({}, function (err, restaurantes) {

        if (err) throw err;

        res.send(restaurantes)

    })

});

app.get('/resta/:_id', function (req, res) {
    res.contentType('application/json');

    Restaurante.findOne({
        _id: req.params._id
    }, function (err, restaurantes) {

        if (restaurantes != null) {

            res.send(restaurantes)

        } else {

            res.render('404', {
                title: 'Registro não encontrado'
            })

        }
    })
})
app.listen(3000, function () {
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
