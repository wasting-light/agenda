(function(angular, undefined) {
  'use strict';

  /**
   * Get the contacts module
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts')
    .controller('ContactsShowController', ContactsShowController);

  /**
   * @ngInject
   * @api public
   */

  function ContactsShowController($stateParams, contactsService) {
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

      contactsService.findOne(id)
        .then(function(res) {
          vm.contact = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
