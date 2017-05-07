const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/public/styles.css', function(request, response) {
    response.sendFile(__dirname + '/public/styles.css');
});

app.use(function(request, response){
    response.send(404, 'Error! File not found.');
});

app.listen(port);