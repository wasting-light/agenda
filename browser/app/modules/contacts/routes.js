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
    $urlRouterProvider.rule(normalizeRoute);

    $stateProvider.state('users-list', {
      url: '/users/',
      templateUrl: 'views/users/list.html',
      controller: 'ContactsListController',
      controllerAs: 'vm'
    });

    $stateProvider.state('users-create', {
      url: '/users/create/',
      templateUrl: 'views/users/create.html',
      controller: 'ContactsCreateController',
      controllerAs: 'vm'
    });

    $stateProvider.state('users-show', {
      url: '/users/:id/',
      templateUrl: 'views/users/show.html',
      controller: 'ContactsShowController',
      controllerAs: 'vm'
    });
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
