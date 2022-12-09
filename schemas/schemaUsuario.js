var mongoose = require("mongoose");

var schemaUsuario = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	nombre: String,
	correo: String,
	fechaNacimiento: String,
	tipoIdentificacion: String,
	foto: String,
	cedula: String,
	contrasenia:String
});

module.exports = mongoose.model("Usuarios", schemaUsuario, "Usuarios");