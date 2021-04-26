var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
// --> 7) Mount the Logger middleware here
app.use(function middleware(req, res, next){
    var string = req.method + " " +req.path + " - " + req.ip;
    //res.json(string);
    console.log(string);
    next();
    });

app.use('/public', express.static("public"));

app.get('/:word/echo', function(req, res) {
    res.json({"echo" : req.params.word})
})

app.get("/", function(req, res) {
    fileAbsPath = __dirname + "/views/index.html";
    res.sendFile(fileAbsPath);
})

function addTime(req) {
    req.time = new Date().toString();
}

app.get('/now', function(req,res, next) {
  
    next();
  }, function(req, res) {
        var time = new Date().toString();
        console.log('time'+time);
        res.json({'time': time});
  }
);

app.get('/json', function(req, res) {
    process.env['MESSAGE_STYLE'] = "uppercase";
    var message = "Hello json";
    console.log(process.env['MESSAGE_STYLE']);
    if (process.env['MESSAGE_STYLE'] == "uppercase") {
        message = "HELLO JSON";
    }
    res.json({"message": message});
})

app.route("/name")
    .get(function(req, res) {
        res.json({'name': req.query.first + " " + req.query.last});
})
    .post(function(req, res) {
        res.json({'name': req.body.first + " " + req.body.last});
    });































 module.exports = app;
