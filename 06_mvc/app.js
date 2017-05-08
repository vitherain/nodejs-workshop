const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const htmlController = require('./controllers/htmlController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

htmlController(app);

app.listen(port);