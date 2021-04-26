var express = require('express');
var app = express();

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// })
app.use('/public', express.static("public"));

app.get("/", function(req, res) {
    fileAbsPath = __dirname + "/views/index.html";
    res.sendFile(fileAbsPath);
})

app.get('/json', function(req, res) {
    res.json({"message": "Hello json"});
})































 module.exports = app;
