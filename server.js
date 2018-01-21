'use strict';
//var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);


app.get('/', function (req, res) {
    res.sendFile('index.html', { "root": __dirname });
});

app.get('/about', function (req, res) {
    res.sendFile('about.html', { "root": __dirname });
});

var server = app.listen(port, function () {
    console.log('Node server is running on port..' + port);
});
