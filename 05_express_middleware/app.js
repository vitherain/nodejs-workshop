const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', function(request, response, next) {
    console.log('Request URL: ', request.url);
    next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.use(function(request, response){
    response.send(404, 'Error! File not found.');
});

app.listen(port);