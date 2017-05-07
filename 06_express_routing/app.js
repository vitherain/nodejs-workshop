const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index');
const users = require('./routes/users');

app.use('/', index);
app.use('/users', users);

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