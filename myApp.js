var express = require('express');
var app = express();

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// })

app.get("/", function(req, res) {
    fileAbsPath = __dirname + "/views/index.html";
    res.sendFile(fileAbsPath);
})


































 module.exports = app;
