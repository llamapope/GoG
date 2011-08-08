var config = require("./config.js");

// express setup
var express = require("express");
var app = express.createServer();

var staticFolder = __dirname + "/public";

var stylus = require("stylus");

app.configure(function(){
    this.set('views', __dirname + '/views');
    this.set('view engine', 'html');
    this.register(".html", require("jqtpl").express);
    this.use(express.bodyParser());
    this.use(express.methodOverride());
    
    this.use(stylus.middleware({ 
        src: __dirname + '/stylus', 
        dest: __dirname + '/public',
        compile: function(str) {
            return stylus(str).set('compress', true);
        }
    }));
    
    this.use(app.router);
    this.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('index'); 
});

app.listen(config.port, config.ip);