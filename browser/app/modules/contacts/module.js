(function(angular, undefined) {
  'use strict';

  /**
   * Module prototype
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts', [])
    .config(config);

  /**
   * Module configuration
   *
   * @api private
   */

  config.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$authProvider'
  ];

  function config($stateProvider, $urlRouterProvider, $authProvider) {
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();

      if(path.substr(-1) !== '/') {
        return path + '/';
      }
    });

    $stateProvider.state('users-list', {
      url: '/users/',
      templateUrl: 'views/users/list.html'
    });

    $stateProvider.state('users-create', {
      url: '/users/create/',
      templateUrl: 'views/users/create.html'
    });

    $stateProvider.state('users-show', {
      url: '/users/:id/',
      templateUrl: 'views/users/show.html'
    });
  }

})(angular);
