/**
 * Module dependencies
 */

var Usuario = require('./model');

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
 * Create a new usuario
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function create(req, res, callback) {
  var usuario = new Usuario(req.body);

  usuario.save(function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Retrieve all usuarios
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function retrieve(req, res, callback) {
  var query = {};

  Usuario.find(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Find a usuario by _id
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function findOne(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Usuario.findOne(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Update a usuario
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

  Usuario.update(query, mod, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Remove a usuario
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function remove(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Usuario.remove(query, function(err, data) {
    callback(err, data, res);
  });
}
