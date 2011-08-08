var config = require("./config.js");

var express = require("express");
var app = express.createServer();

app.set("view engine", "html");
app.register(".html", require("jqtpl").express);

app.get('/', function(req, res){
    res.render('index');
});

app.listen(config.port, config.ip);