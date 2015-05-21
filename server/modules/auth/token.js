/**
 * Module dependencies
 */

var config = require('../../config');
var jwt    = require('jwt-simple');
var moment = require('moment');

/**
 * Expose the module
 */

module.exports = {
  create: create
}

/**
 * Create a JSON Web Token
 *
 * @param {Object} user
 * @return {String}
 */

function create(sub) {
  var payload = {
    sub: sub,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };

  return jwt.encode(payload, config.tokenSecret);
}
