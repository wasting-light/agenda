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

  function authService($http, $q) {
    this.getCurrentUser = getCurrentUser;
    this.isAuthorized = isAuthorized;

    function getCurrentUser() {
      var defer = $q.defer();

      $http.get('/me')
        .success(function(data, status) {
          defer.resolve({ data: data, status: status });
        })
        .error(function(data, status) {
          defer.reject({ data: data, status: status });
        });

      return defer.promise;
    }

    function isAuthorized(authorizedRoles) {

      var defer = $q.defer();

      this.getCurrentUser()
        .then(function(response) {
          var userRole = response.data;

          if(userRole === 'admin') {
            console.log('hey');
            defer.resolve();
            return true;
          }

          console.log('false');
          defer.reject();
          return false;
        });
    }
  }

})(angular);
