var express = require('express');
var app = new express();

var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname + '/home.html'));
    });

app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname + '/about.html'));
    });

app.get('/contact', (req, res) =>{
    res.sendFile(path.join(__dirname + '/contact.html'));
    });

fs.readFile('index.html', (err, html) => {
    if(err){
        throw err;
    }

    var server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log('Ivan A Martinez-Arias Node Activity Server Port is: http://127.0.0.1:' + port);
    });
});
