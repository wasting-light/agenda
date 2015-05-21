(function(angular, undefined) {
  'use strict';

  /**
   * Get the contacts module
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts')
    .controller('ContactsListController', ContactsListController);

  /**
   * @ngInject
   * @api public
   */

  function ContactsListController(contactsService) {
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

      contactsService.retrieve()
        .then(function(res) {
          vm.contacts = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }

    /**
     * Remove a contact
     *
     * @api public
     */

    function remove(id, index) {
      vm.isLoading = true;

      contactsService.remove(id, vm.contact)
        .then(function(res) {
          vm.contacts.splice(index, 1);
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
