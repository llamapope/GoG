var config = require("./config.js");
var express = require("express");
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(config.port, config.ip);