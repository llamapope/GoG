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
        dest: staticFolder,
        compile: function(str) {
            return stylus(str).set('compress', true);
        }
    }));
    
    this.use(app.router);
    this.use(express.static(staticFolder));
});

app.get('/', function(req, res){
  res.render('index'); 
});

app.listen(config.port, config.ip);