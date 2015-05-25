(function(angular, undefined) {
  'use strict';

  /**
   * Get the auth module
   *
   * @api public
   */

  angular
    .module('agenda.modules.auth')
    .service('tokenService', tokenService);

  /**
   * Manage JSON Web Tokens
   *
   * @ngInject
   * @api public
   */

  function tokenService() {
    this.urlBase64Decode        = urlBase64Decode;
    this.decodeToken            = decodeToken;
    this.isTokenExpired         = isTokenExpired;
    this.getTokenExpirationDate = getTokenExpirationDate;

    /**
     * Decrypt a base64 string
     *
     * @param {String} str
     * @return {*}
     * @api private
     */

    function urlBase64Decode(str) {
      var output = str.replace(/-/g, '+').replace(/_/g, '/');

      switch (output.length % 4) {
        case 0: { break; }
        case 2: { output += '=='; break; }
        case 3: { output += '='; break; }
        default: {
          throw 'Illegal base64url string!';
        }
      }

      return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
    }

    /**
     * Decode a token
     *
     * @param {String} token
     * @return {*}
     * @api public
     */

    function decodeToken(token) {
      var parts = token.split('.');

      if (parts.length !== 3) {
        throw new Error('JWT must have 3 parts');
      }

      var decoded = this.urlBase64Decode(parts[1]);

      if (!decoded) {
        throw new Error('Cannot decode the token');
      }

      return JSON.parse(decoded);
    }

    /**
     * Get a token expiration date
     *
     * @param {String} token
     * @return {Date}
     * @api public
     */

    function getTokenExpirationDate(token) {
      var decoded;
      decoded = this.decodeToken(token);

      if(!decoded.exp) {
        return null;
      }

      var d = new Date(0); // The 0 here is the key, which sets the date to the epoch
      d.setUTCSeconds(decoded.exp);

      return d;
    }

    /**
     * Verify if a token has expired
     *
     * @param {String} token
     * @return {Boolean}
     * @api public
     */

    function isTokenExpired(token) {
      var d = this.getTokenExpirationDate(token);
      var offsetSeconds = offsetSeconds || 0;

      if (!d) {
        return false;
      }

      // Token expired?
      return !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    }
  }

})(angular);
