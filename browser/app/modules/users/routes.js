(function(angular, undefined) {
  'use strict';

  /**
   * Get the users module
   *
   * @api public
   */

  angular
    .module('agenda.modules.users')
    .config(config);

  /**
   * Set the users routes
   *
   * @ngInject
   * @api public
   */

  function config($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider.state('users-list', {
      url: '/users/',
      templateUrl: 'views/users/list.html',
      controller: 'UsersListController',
      controllerAs: 'vm',
      resolve: {
        authenticated: authenticationResolve
      }
    });

    $stateProvider.state('users-create', {
      url: '/users/create/',
      templateUrl: 'views/users/create.html',
      controller: 'UsersCreateController',
      controllerAs: 'vm',
      resolve: {
        authenticated: authenticationResolve
      }
    });

    $stateProvider.state('users-show', {
      url: '/users/:id/',
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowController',
      controllerAs: 'vm',
      resolve: {
        authenticated: authenticationResolve
      }
    });

    $stateProvider.state('users-edit', {
      url: '/users/:id/edit/',
      templateUrl: 'views/users/edit.html',
      controller: 'UsersEditController',
      controllerAs: 'vm',
      resolve: {
        authenticated: authenticationResolve
      }
    });
  }

  /**
   * Handle authenticated and unauthenticated users
   *
   * @ngInject
   * @api private
   */

  function authenticationResolve($q, $location, $auth) {
    var defer = $q.defer();

    if(!$auth.isAuthenticated()) {
      $location.path('/login');
    } else {
      defer.resolve();
    }

    return defer.promise;
  }

})(angular);
