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

    $stateProvider.state('contacts-list', {
      url: '/contacts/',
      templateUrl: 'views/contacts/list.html',
      controller: 'ContactsListController',
      controllerAs: 'vm'
    });

    $stateProvider.state('contacts-create', {
      url: '/contacts/create/',
      templateUrl: 'views/contacts/create.html',
      controller: 'ContactsCreateController',
      controllerAs: 'vm'
    });

    $stateProvider.state('contacts-show', {
      url: '/contacts/:id/',
      templateUrl: 'views/contacts/show.html',
      controller: 'ContactsShowController',
      controllerAs: 'vm'
    });

    $stateProvider.state('contacts-edit', {
      url: '/contacts/:id/edit/',
      templateUrl: 'views/contacts/edit.html',
      controller: 'ContactsEditController',
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
