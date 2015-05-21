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

var User = require('../users/model');
router.get('/reset', function(req, res) {
  User.find({}, function(err, users) {
    users.forEach(function(user) {
      user.remove();
    });
  });

  res.json('hey');
});

router.post('/login', function(req, res) {
  auth.login(req, res, callback);
});

router.post('/signup', function(req, res) {
  auth.signup(req, res, callback);
});

/**
 * Expose the router
 */

module.exports = router;
