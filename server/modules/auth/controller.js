/**
 * Module dependencies
 */

var token = require('./token');
var User = require('../users/model');

/**
 * Expose the controller
 */

module.exports = {
  login: login,
  signup: signup
};

/**
 * Sign a user in
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function login(req, res, callback) {
  var query = {
    email: req.body.email
  };

  User.findOne(query, '+password', function(err, user) {
    if(!user) {
      callback(err, {}, 401, res);
      return;
    }

    user.comparePassword(req.body.password, function(err, isMatch) {
      if(!isMatch) {
        callback(err, {}, 401, res);
        return;
      }

      user.password = undefined;

      var data = {
        token: token.create(user._id),
        user: user
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

function signup(req, res, callback) {
  var query = {
    email: req.body.email
  };

  User.findOne(query, '+password', function(err, existingUser) {
    if(existingUser) {
      callback(err, {}, 409, res);
      return;
    }

    var user = new User(req.body);

    user.save(function(err, user) {
      user.password = undefined;

      var data = {
        token: token.create(user._id),
        user: user
      };

      callback(err, data, 200, res);
    });
  });
}
