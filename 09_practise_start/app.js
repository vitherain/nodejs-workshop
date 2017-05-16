/* TODO: Require all 3 project dependencies (3 lines are missing) */

const app = /* TODO: initialize app (the rest of the line is missing) */;
const port = process.env.PORT || 3000;

/* TODO: Connect to MongoDB using mongoose and connection string (1 line) */

/* TODO: You need body-parser to be able to handle JSON (1 line) */

const index = require('./routes/index');
app.use('/', index);

const cars = /* TODO: You need to require router for cars here (the rest of the line is missing) */
app.use(/* TODO: Put the cars URIs prefix here instead of null */ null, cars);

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