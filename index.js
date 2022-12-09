var express = require("express");
var app = express();
var path = require("path");
var folder = path.join(__dirname, "public");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Kevin0315arias:UgM48vrh9WMrdje@Proyecto1.gkqcd.mongodb.net/Proyecto?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use("/tarjetas",require("./api/tarjetas.js"));
app.use("/usuarios",require("./api/usuarios.js"));
app.use("/platillos", require("./api/platillo"));


app.use(express.static(folder));
app.listen(5000, function () {
    console.log("Servidor corriendo en el puerto 5000")
});
