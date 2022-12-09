var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Tarjeta = require("../schemas/schemaTarjeta.js");

router.get("/", function(req,res){
    Tarjeta.find().exec()
    .then(function(result){
        res.json(result);
    });
});

router.post('/insertar',function(req,res){
    var tarjetaNueva = new Tarjeta({
        _id: new mongoose.Types.ObjectId(),
        tipo: req.body.tipo,
        expiracion: req.body.expiracion,
        numero: req.body.numero,
        codigo: req.body.codigo
    });
    tarjetaNueva.save()
    .then(
        function(result){
            res.json(result);
        }
    );
});

router.get("/:id", function (req, res){
    Tarjeta.find()
    .then(function(result){
        res.json(result);
    });
});

router.patch('/:id', function(req, res){
	var modificarTarjeta = new Tarjeta({
		tipo: req.body.tipo,
		expiracion: req.body.expiracion,
		numero: req.body.numero,
        codigo: req.body.codigo
	})
	Tarjeta.updateOne({ _id: require('mongodb').ObjectID(req.params.id)}, modificarTarjeta)
	.then(function(result){
		res.json(result)
	})
})
router.delete('/:id', function(req, res){
	Tarjeta.deleteOne({ _id: require('mongodb').ObjectID(req.params.id)})
	.then(function(result){
		res.json(result)
	})
})
module.exports = router;