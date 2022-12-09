var mongoose = require("mongoose");

var schemaTarjeta = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	tipo: String,
	expiracion: Date,
	numero: Number,
	codigo: Number
});

module.exports = mongoose.model("Tarjetas", schemaTarjeta, "Tarjetas");