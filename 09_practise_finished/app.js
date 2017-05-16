const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://test:test@ds143141.mlab.com:43141/node_workshop_cars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index');
const cars = require('./routes/cars');

app.use('/', index);
app.use('/cars', cars);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/angular', express.static(__dirname + '/public/angular'));

app.use(function(request, response, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, request, response, next) {
  response.status(err.status || 500);
  response.end(err.message);
});

app.listen(port);