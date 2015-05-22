(function(angular, undefined) {
  'use strict';

  /**
   * Get the users module
   *
   * @api public
   */

  angular
    .module('agenda.modules.users')
    .controller('UsersListController', UsersListController);

  /**
   * @ngInject
   * @api public
   */

  function UsersListController(usersService) {
    var vm = this;
    vm.isLoading = false;

    vm.activate = activate;
    vm.remove = remove;

    vm.activate();

    /**
     * Activate the controller
     *
     * @api public
     */

    function activate() {
      vm.isLoading = true;

      usersService.retrieve()
        .then(function(res) {
          vm.users = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }

    /**
     * Remove a user
     *
     * @api public
     */

    function remove(id, index) {
      vm.isLoading = true;

      usersService.remove(id, vm.user)
        .then(function(res) {
          vm.users.splice(index, 1);
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
