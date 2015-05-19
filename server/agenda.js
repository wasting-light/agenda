/**
 * Module dependencies
 */

var bodyParser     = require('body-parser');
var config         = require('./config');
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

/**
 * Application prototype
 */

var app = express();

/**
 * Config
 */

app.set('port', process.env.PORT || config.port);
app.set('public folder', path.join(__dirname, '../public'));

/**
 * Middleware
 */

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(express.static(app.get('public folder')));

/**
 * Environment
 */

var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  app.use(errorHandler());
}

/**
 * Routes
 */

app.get('/', function(req, res) {
  res.json(app.get('public folder'));
})

/**
 * Bootstrap
 */

app.listen(app.get('port'));
