 var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var timeout = require('connect-timeout');
var compress = require('compression');

var app = express();
var port = 4224;
app.set('port', port);

app.use(cors());
app.use(timeout('20s'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
function haltOnTimeout(req, res, next) {
  if (!req.timeout) {
    next();
  }
}
app.use(haltOnTimeout);

app.use('/ha-libraries', require('./routes'));

app.listen(app.get('port'), function() {
  console.log('The server is running at http://localhost:' + app.get('port'));
});
