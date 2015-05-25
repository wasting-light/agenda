(function(angular, undefined) {
  'use strict';

  /**
   * Get the auth module
   *
   * @api public
   */

  angular
    .module('agenda.modules.auth')
    .service('authService', authService);

  /**
   * Consume the auth server API
   *
   * @ngInject
   * @api public
   */

  function authService($window, tokenService) {
    this.isAuthorized = isAuthorized;

    function isAuthorized(authorizedRoles) {
      var token = $window.localStorage.satellizer_token;
      var decoded = tokenService.decodeToken(token);
      var role = decoded.sub.role;

      if(authorizedRoles.indexOf(role) === -1) {
        return false;
      }


      return true;
    }
  }

})(angular);
