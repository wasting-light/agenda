/**
 * Module dependencies
 */

var config = require('../../config');
var jwt = require('jwt-simple');
var request = require('request');
var Token = require('./token');
var User = require('../users/model');

/**
 * Expose the controller
 */

module.exports = {
  login: login,
  signup: signup,
  google: google,
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
      return callback(err, {}, 401, res);
    }

    user.comparePassword(req.body.password, function(err, isMatch) {
      if(!isMatch) {
        return callback(err, {}, 401, res);
      }

      user.password = undefined;

      var data = {
        token: Token.create({id: user._id, role: user.role}),
        user: user
      };

      return callback(err, data, 200, res);
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
      return callback(err, {}, 409, res);
    }

    var user = new User(req.body);

    user.save(function(err, user) {
      user.password = undefined;

      var data = {
        token: Token.create({id: user._id, role: user.role}),
        user: user
      };

      return callback(err, data, 200, res);
    });
  });
}

/**
 * Sign a user in with Google
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} callback
 * @api public
 */

function google(req, res, callback) {
  var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.googleSecret,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
    var accessToken = token.access_token;
    var headers = { Authorization: 'Bearer ' + accessToken };

    request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
      if(req.headers.authorization) {
        User.findOne({ google: profile.sub }, function(err, existingUser) {
          if(existingUser) {
            return res.json({
              token: Token.create({id: existingUser._id, role: existingUser.role}),
              user: existingUser
            });
          }

          var headerToken = req.headers.authorization.split(' ')[1];
          var payload = Token.decode(headerToken);

          User.findById(payload.sub.id, function(err, user) {
            if(!user) {
              return res.status(400).send({
                message: 'User not found'
              });
            }

            user.google = profile.sub;
            user.avatar = user.avatar | profile.picture.replace('sz=50', 'sz=200');
            user.name = user.name || profile.name;

            user.save(function() {
              return res.json({
                token: Token.create({id: user._id, role: user.role}),
                user: user
              });
            });
          });

        });
      } else {
        User.findOne({ google: profile.sub }, function(err, existingUser) {
          if(existingUser) {
            return res.json({
              token: Token.create({id: existingUser._id, role: existingUser.role}),
              user: existingUser
            });
          }

          var user = new User({
            google: profile.sub,
            avatar: profile.picture.replace('sz=50', 'sz=200'),
            name: profile.name,
            email: profile.email
          });

          user.save(function(err) {
            return res.json({
              token: Token.create({id: user._id, role: user.role}),
              user: user
            });
          });
        });
      }
    });
  });
}
