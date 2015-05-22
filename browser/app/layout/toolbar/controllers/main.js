(function(angular, undefined) {
  'use strict';

  /**
   * Get the toolbar module
   *
   * @api public
   */

  angular
    .module('agenda.layout.toolbar')
    .controller('ToolbarController', ToolbarController);

  /**
   * @ngInject
   * @api public
   */

  function ToolbarController($rootScope, $location, $window, $auth) {
    var vm = this;

    vm.logout = logout;

    /**
     * Log the user out
     *
     * @api public
     */

    function logout() {
      $window.localStorage.removeItem('currentUser');
      $window.localStorage.removeItem('satellizer_token');
      $rootScope.currentUser = undefined;

      $location.path('/');
    }
  }

})(angular);
