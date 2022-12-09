var express = require("express");
const { isValidObjectId } = require("mongoose");
var router = express.Router();

var Platillo = require("../schemas/schemaPlatillo");

router.get("/", function(req, res){
    Platillo.find().exec()
    .then(function(result){
        res.json(result);
    });
});

module.exports= router;