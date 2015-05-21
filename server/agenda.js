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
app.set('db', config.db);
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
 * Database
 */

mongoose.connect(app.get('db'));

/**
 * Routes
 */

var authRoutes     = require('./modules/auth/routes');
var contactsRoutes = require('./modules/contacts/routes');
var usersRoutes    = require('./modules/users/routes');


app.use('/auth', authRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/users', usersRoutes);

/**
 * Bootstrap
 */

app.listen(app.get('port'));
