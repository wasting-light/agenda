(function(angular, undefined) {
  'use strict';

  /**
   * Get the auth module
   *
   * @api public
   */

  angular
    .module('agenda.modules.auth')
    .controller('AuthSignupController', AuthSignupController);

  /**
   * @ngInject
   * @api public
   */

  function AuthSignupController($rootScope, $window, $auth) {
    var vm = this;
    vm.isLoading = false;

    vm.credentials = {
      email: 'gui@gmail.com',
      password: '123'
    };

    vm.signup = signup;

    /**
     * Log the user in
     *
     * @api public
     */

    function signup() {
      vm.isLoading = true;

      $auth.signup(vm.credentials)
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
