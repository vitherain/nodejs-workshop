const http = require("http");

const port = process.env.PORT || 3000;

function requestHandler(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
}

const server = http.createServer(requestHandler);
server.listen(port);
console.log('Listening on localhost:3000');