var express = require("express");
// var mongoose = require("mongoose");
// var path = require("path");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static("./"));

app.listen(port);
