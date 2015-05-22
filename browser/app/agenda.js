(function(angular, undefined) {
  'use strict';

  /**
   * Module prototype
   *
   * @api public
   */

  angular
    .module('agenda', [
      'ngMaterial',
      'ui.router',
      'satellizer',
      'agenda.modules.auth',
      'agenda.modules.contacts',
      'agenda.layout.toolbar',
    ])
    .config(config)
    .run(run);

  /**
   * Define the default config of the app
   *
   * @ngInject
   * @api public
   */

  function config($stateProvider, $urlRouterProvider, $authProvider, $mdIconProvider) {
    $urlRouterProvider.rule(normalizeRoute);
    $mdIconProvider.defaultIconSet('assets/icons/core-icons.svg', 26);

    $authProvider.loginUrl = '/auth/login/';
    $authProvider.signupUrl = '/auth/signup/';

    $authProvider.google({
      clientId: '1017806857153-fagnt85b1hp1vo51co4qpbj6qte006b8.apps.googleusercontent.com',
    });
  }

  /**
   * Run before anything else
   *
   * @ngInject
   * @api public
   */

  function run($rootScope, $window, $auth) {
    if($auth.isAuthenticated() && $window.localStorage.currentUser) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  }

  /**
   * Normalize the paths that don't have a trailing slash
   *
   * @api private
   */

  function normalizeRoute($injector, $location) {
    var path = $location.path();

    if(path.substr(-1) !== '/') {
      return path + '/';
    }
  }

})(angular);
