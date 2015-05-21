/**
 * Module dependencies
 */

var User = require('./model');

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
 * Create a new user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function create(req, res, callback) {
  var user = new User(req.body);

  user.save(function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Retrieve all users
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function retrieve(req, res, callback) {
  var query = {};

  User.find(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Find a user by _id
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function findOne(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  User.findOne(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Update a user
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

  User.update(query, mod, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Remove a user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function remove(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  User.remove(query, function(err, data) {
    callback(err, data, res);
  });
}
