(function(angular, undefined) {
  'use strict';

  /**
   * Get the users module
   *
   * @api public
   */

  angular
    .module('agenda.modules.users')
    .controller('UsersCreateController', UsersCreateController);

  /**
   * @ngInject
   * @api public
   */

  function UsersCreateController(usersService) {
    var vm = this;
    vm.isLoading = false;
    vm.user = {
      name: '',
      email: '',
      password: ''
    };

    vm.create = create;

    /**
     * Create a new user
     *
     * @api public
     */

    function create(user) {
      vm.isLoading = true;

      usersService.create(user)
        .then(function(res) {
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
