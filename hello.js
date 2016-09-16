#!/usr/bin/env nodejs
var http = require('http');
  fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    } 



    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
    }).listen(8080, 'localhost');
});


console.log('Server running at http://localhost:8080/');

