const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://test:test@ds133281.mlab.com:33281/nodejs_workshop');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index');
const users = require('./routes/users');

app.use('/', index);
app.use('/users', users);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/angular', express.static(__dirname + '/public/angular'));

app.use(function(request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, request, response, next) {
  response.status(err.status || 500);
  response.end(err.message);
});

app.listen(port);