const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

http.createServer(function (request, response) {
    console.log("In comes a request to: " + request.url);

    if (request.url === "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/index.html', 'utf8', function (err, html) {
                response.end(html);
            });
    } else if (request.url === "/public/styles.css") {
        response.writeHead(200, { 'Content-Type': 'text/css' });
            fs.readFile(__dirname + '/public/styles.css', 'utf8', function (err, html) {
                response.end(html);
            });
    } else {
        response.writeHead(404);
        response.end("Error! File not found.");
    }    

}).listen(port);

console.log('Listening on localhost:3000');