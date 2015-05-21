/**
 * Module dependencies
 */

var token = require('./token');
var User = require('../users/model');

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
 * Sign a user in
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function create(req, res, callback) {
  var query = {
    email: req.body.email
  };

  User.findOne(query, '+password', function(err, user) {
    if(!user) {
      callback(err, {}, 401, res);
    }

    user.comparePassword(req.body.password, function(err, isMatch) {
      if(!isMatch) {
        callback(err, {}, 401, res);
      }

      var data = {
        token: token.createToken(user._id)
      };

      callback(err, data, 200, res);
    });
  });
}

/**
 * Sign a user up
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function retrieve(req, res, callback) {
  var query = {
    email: req.body.email
  };

  User.findOne(query, '+password', function(err, existingUser) {
    if(existingUser) {
      callback(err, {}, 409, res);
    }

    var user = new User(req.body);

    user.save(function() {
      var data = {
        token: token.createToken(user._id)
      };

      callback(err, data, 200, res);
    });
  });
}
