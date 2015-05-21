(function(angular, undefined) {
  'use strict';

  /**
   * Get the auth module
   *
   * @api public
   */

  angular
    .module('agenda.modules.auth')
    .config(config);

  /**
   * Set the auth routes
   *
   * @ngInject
   * @api public
   */

  function config($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider.state('auth-login', {
      url: '/login/',
      templateUrl: 'views/auth/login.html',
      controller: 'AuthLoginController',
      controllerAs: 'vm'
    });

    $stateProvider.state('auth-signup', {
      url: '/signup/',
      templateUrl: 'views/auth/signup.html',
      controller: 'AuthSignupController',
      controllerAs: 'vm'
    });
  }

})(angular);
