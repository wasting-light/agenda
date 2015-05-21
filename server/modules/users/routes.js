/**
 * Module dependencies
 */

var router = require('express').Router();
var user = require('./controller');

/**
 * Default callback handler to all routes
 *
 * @param {Object} err
 * @param {Object} data
 * @param {Object} res
 * @api private
 */

function callback(err, data, res) {
  if(err) throw err;

  res.json(data);
}

/**
 * Set the routes
 */

router.get('/', function(req, res) {
  user.retrieve(req, res, callback);
});

router.post('/', function(req, res) {
  user.create(req, res, callback);
});

router.get('/:id', function(req, res) {
  user.findOne(req, res, callback);
});

router.put('/:id', function(req, res) {
  user.update(req, res, callback);
});

router.delete('/:id', function(req, res) {
  user.remove(req, res, callback);
});

/**
 * Expose the router
 */

module.exports = router;
