var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Usuario = require("../schemas/schemaUsuario.js");

router.get("/", function(req,res){
    Usuario.find().exec()
    .then(function(result){
        res.json(result);
    });
});

router.post('/insertar',function(req,res){
    var usuarioNuevo = new Usuario({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
	    correo: req.body.correo,
	    fechaNacimiento: req.body.fechaNacimiento,
	    tipoIdentificacion: req.body.tipoIdentificacion,
	    foto: req.body.foto,
	    cedula: req.body.cedula,
	    contrasenia:req.body.contrasenia
    });
    usuarioNuevo.save()
    .then(
        function(result){
            res.json(result);
        }
    );
});

router.get("/:id", function (req, res){
    Usuario.find()
    .then(function(result){
        res.json(result);
    });
});

router.patch('/:id', function(req, res){
	var modificarUsuario = new Tarjeta({
		tipo: req.body.tipo,
		expiracion: req.body.expiracion,
		numero: req.body.numero,
        codigo: req.body.codigo
	})
	Usuario.updateOne({ _id: require('mongodb').ObjectID(req.params.id)}, modificarUsuario)
	.then(function(result){
		res.json(result)
	})
})
router.delete('/:id', function(req, res){
	Usuario.deleteOne({ _id: require('mongodb').ObjectID(req.params.id)})
	.then(function(result){
		res.json(result)
	})
})
module.exports = router;
