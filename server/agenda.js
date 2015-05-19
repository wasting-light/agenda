var bodyParser     = require('body-parser');
var config = require('./config');
var debug          = require('debug');
var errorHandler   = require('errorhandler');
var express        = require('express');
var http           = require('http');
var jwt            = require('jwt-simple');
var methodOverride = require('method-override');
var moment         = require('moment');
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var path           = require('path');

var app = express();

app.set('port', process.env.PORT || config.port);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

var publicFolder = path.join(__dirname, '../public');
app.use(express.static(publicFolder));

var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  app.use(errorHandler());
}

app.listen(app.get('port'));