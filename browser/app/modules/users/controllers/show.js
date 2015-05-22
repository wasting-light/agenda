(function(angular, undefined) {
  'use strict';

  /**
   * Get the users module
   *
   * @api public
   */

  angular
    .module('agenda.modules.users')
    .controller('UsersShowController', UsersShowController);

  /**
   * @ngInject
   * @api public
   */

  function UsersShowController($stateParams, usersService) {
    var vm = this;
    vm.isLoading = false;

    vm.activate = activate;

    vm.activate();

    /**
     * Activate the controller
     *
     * @api public
     */

    function activate() {
      var id = $stateParams.id;
      vm.isLoading = true;

      usersService.findOne(id)
        .then(function(res) {
          vm.user = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
