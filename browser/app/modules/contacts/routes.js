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
      authenticated: true,
      authorizedRoles: ['admin']
    });

    $stateProvider.state('contacts-create', {
      url: '/contacts/create/',
      templateUrl: 'views/contacts/create.html',
      controller: 'ContactsCreateController',
      controllerAs: 'vm',
      authenticated: true,
      authorizedRoles: ['admin']
    });

    $stateProvider.state('contacts-show', {
      url: '/contacts/:id/',
      templateUrl: 'views/contacts/show.html',
      controller: 'ContactsShowController',
      controllerAs: 'vm',
      authenticated: true,
      authorizedRoles: ['admin']
    });

    $stateProvider.state('contacts-edit', {
      url: '/contacts/:id/edit/',
      templateUrl: 'views/contacts/edit.html',
      controller: 'ContactsEditController',
      controllerAs: 'vm',
      authenticated: true,
      authorizedRoles: ['admin']
    });
  }

})(angular);
