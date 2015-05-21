(function(angular, undefined) {
  'use strict';

  /**
   * Get the auth module
   *
   * @api public
   */

  angular
    .module('agenda.modules.auth')
    .controller('AuthLoginController', AuthLoginController);

  /**
   * @ngInject
   * @api public
   */

  function AuthLoginController($rootScope, $window, $auth) {
    var vm = this;
    vm.isLoading = false;

    vm.credentials = {
      email: 'gui@gmail.com',
      password: '123'
    };

    vm.login = login;

    /**
     * Log the user in
     *
     * @api public
     */

    function login() {
      vm.isLoading = true;

      $auth.login(vm.credentials)
        .then(function(response) {
          vm.isLoading = false;
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
          vm.isLoading = false;
          console.log(response);
        });
    }
  }

})(angular);
