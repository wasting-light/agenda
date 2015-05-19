/**
 * Module dependencies
 */

var Contact = require('./model');

/**
 * Expose the controller
 */

module.exports = {
  create: create,
  retrieve: retrieve,
  findOne: findOne,
  update: update,
  remove: remove
}

/**
 * Create a new contact
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function create(req, res, callback) {
  var contact = new Contact(req.body);

  contact.save(function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Retrieve all contacts
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function retrieve(req, res, callback) {
  var query = {};

  Contact.find(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Find one contact by _id
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function findOne(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Contact.findOne(query, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Update a contact
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

  Contact.update(query, mod, function(err, data) {
    callback(err, data, res);
  });
}

/**
 * Remove a contact
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function remove(req, res, callback) {
  var id = req.params.id;
  var query = {_id: id};

  Contact.remove(query, function(err, data) {
    callback(err, data, res);
  });
}
