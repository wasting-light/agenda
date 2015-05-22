/**
 * Module dependencies
 */

var auth   = require('./controller');
var router = require('express').Router();

/**
 * Default callback handler to all routes
 *
 * @param {Object} err
 * @param {Object} data
 * @param {Object} res
 * @api private
 */

function callback(err, data, status, res) {
  if(err) throw err;

  res.status(status).json(data);
}

/**
 * Set the routes
 */

router.post('/login', function(req, res) {
  auth.login(req, res, callback);
});

router.post('/signup', function(req, res) {
  auth.signup(req, res, callback);
});

router.post('/google', function(req, res) {
  auth.google(req, res, callback);
});

/**
 * Expose the router
 */

module.exports = router;
