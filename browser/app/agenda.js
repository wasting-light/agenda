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
      'agenda.modules.users',
      'agenda.layout.toolbar',
    ])
    .config(config)
    .run(verifyAuthentication)
    .run(ensureAuthentication)
    .run(ensureAuthorization);

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
   * Verify authentication
   *
   * @ngInject
   * @api public
   */

  function verifyAuthentication($rootScope, $window, $auth) {
    if($auth.isAuthenticated() && $window.localStorage.currentUser) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  }

  /**
   * Ensure authorization
   *
   * @ngInject
   * @api public
   */

  function ensureAuthentication($rootScope, $location, $window, $q, $auth) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      if(next.authenticated) {
        // var defer = $q.defer();

        if(!$auth.isAuthenticated()) {
          event.preventDefault();
          $location.path('/login');
        } else {
          // defer.resolve();
        }
      }
    });
  }

  /**
   * Ensure authorization
   *
   * @ngInject
   * @api public
   */

  function ensureAuthorization($rootScope, $location, authService) {
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
