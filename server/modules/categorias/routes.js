/**
 * Module dependencies
 */

var router = require('express').Router();
var categoria = require('./controller');

function callback(err, data, res) {
  if(err) throw err;

  res.json(data);
}

router.get('/', function(req, res) {
  categoria.retrieve(req, res, callback);
});

router.post('/', function(req, res) {
  categoria.create(req, res, callback);
});

router.get('/:id', function(req, res) {
  categoria.findOne(req, res, callback);
});

router.put('/:id', function(req, res) {
  categoria.update(req, res, callback);
});

router.delete('/:id', function(req, res) {
  categoria.remove(req, res, callback);
});

/**
 * Expose the router
 */

module.exports = router;
