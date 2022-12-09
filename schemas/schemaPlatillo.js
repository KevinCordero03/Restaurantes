var mongoose = require("mongoose");

var schemaPlatillo = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    tipo: String,
    precio: String,
    caracteristicas: String
});

//crear modelo
module.exports = mongoose.model("Platillo", schemaPlatillo, "Platillos");