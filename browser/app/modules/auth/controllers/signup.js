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
     * Sign the user up
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

    /**
     * Sign up the user by Google
     *
     * @api public
     */

    function googleSignup() {
      vm.isLoading = true;

      $auth.link('google')
        .then(function(response) {
          vm.isLoading = false;
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
          vm.isLoading = false;
          console.info('error', response);
        });
    }
  }

})(angular);
