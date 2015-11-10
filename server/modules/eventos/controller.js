/**
 * Module dependencies
 */

var Evento = require('./model');

/**
 * Expose the controller
 */

module.exports = {
  create: create,
  retrieve: retrieve,
  findOne: findOne,
  update: update,
  remove: remove
};

/**
 * Create a new evento
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function create(req, res, callback) {
  var evento = new Evento(req.body);

  evento.save(function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Retrieve all eventos
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function retrieve(req, res, callback) {
  var query = {};

  Evento.find(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Find a evento by _id
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function findOne(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Evento.findOne(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Update a evento
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function update(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};
  var mod = req.body;

  delete mod._id;

  Evento.update(query, mod, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Remove a evento
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function remove(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Evento.remove(query, function(err, data) {
    callback(err, data, res);
  });
}
