(function(angular, undefined) {
  'use strict';

  /**
   * Get the contacts module
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts')
    .config(config);

  /**
   * Set the contacts routes
   *
   * @ngInject
   * @api public
   */

  function config($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider.state('contacts-list', {
      url: '/contacts/',
      templateUrl: 'views/contacts/list.html',
      controller: 'ContactsListController',
      controllerAs: 'vm',
      resolve: {
        authenticated: authenticationResolve
      }
    });

    $stateProvider.state('contacts-create', {
      url: '/contacts/create/',
      templateUrl: 'views/contacts/create.html',
      controller: 'ContactsCreateController',
      controllerAs: 'vm',
      resolve: {
        authenticated: authenticationResolve
      }
    });

    $stateProvider.state('contacts-show', {
      url: '/contacts/:id/',
      templateUrl: 'views/contacts/show.html',
      controller: 'ContactsShowController',
      controllerAs: 'vm',
      resolve: {
        authenticated: authenticationResolve
      }
    });

    $stateProvider.state('contacts-edit', {
      url: '/contacts/:id/edit/',
      templateUrl: 'views/contacts/edit.html',
      controller: 'ContactsEditController',
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
