(function(angular, undefined) {
  'use strict';

  /**
   * Get the usuarios module
   *
   * @api public
   */

  angular
    .module('agenda.modules.usuarios')
    .config(config);

  /**
   * Set the usuarios routes
   *
   * @ngInject
   * @api public
   */

  function config($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider.state('usuarios-list', {
      url: '/usuarios/',
      templateUrl: 'views/usuarios/list.html',
      controller: 'UsuariosListController',
      controllerAs: 'vm',
      authenticated: true
    });

    $stateProvider.state('usuarios-create', {
      url: '/usuarios/create/',
      templateUrl: 'views/usuarios/create.html',
      controller: 'UsuariosCreateController',
      controllerAs: 'vm',
      authenticated: true,
      authorizedRoles: ['editor', 'admin']
    });

    $stateProvider.state('usuarios-show', {
      url: '/usuarios/:id/',
      templateUrl: 'views/usuarios/show.html',
      controller: 'UsuariosShowController',
      controllerAs: 'vm',
      authenticated: true,
    });

    $stateProvider.state('usuarios-edit', {
      url: '/usuarios/:id/edit/',
      templateUrl: 'views/usuarios/edit.html',
      controller: 'UsuariosEditController',
      controllerAs: 'vm',
      authenticated: true,
      authorizedRoles: ['admin']
    });
  }

})(angular);
