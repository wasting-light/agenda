(function(angular, undefined) {
  'use strict';

  /**
   * Get the eventos module
   *
   * @api public
   */

  angular
    .module('agenda.modules.eventos')
    .config(config);

  /**
   * Set the eventos routes
   *
   * @ngInject
   * @api public
   */

  function config($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider.state('eventos-list', {
      url: '/eventos/',
      templateUrl: 'views/eventos/list.html',
      controller: 'EventosListController',
      controllerAs: 'vm',
      authenticated: true
    });

    $stateProvider.state('eventos-create', {
      url: '/eventos/create/',
      templateUrl: 'views/eventos/create.html',
      controller: 'EventosCreateController',
      controllerAs: 'vm',
      authenticated: true,
      authorizedRoles: ['editor', 'admin']
    });

    $stateProvider.state('eventos-show', {
      url: '/eventos/:id/',
      templateUrl: 'views/eventos/show.html',
      controller: 'EventosShowController',
      controllerAs: 'vm',
      authenticated: true,
    });

    $stateProvider.state('eventos-edit', {
      url: '/eventos/:id/edit/',
      templateUrl: 'views/eventos/edit.html',
      controller: 'EventosEditController',
      controllerAs: 'vm',
      authenticated: true,
      authorizedRoles: ['admin']
    });
  }

})(angular);
