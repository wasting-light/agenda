(function(angular, undefined) {
  'use strict';

  /**
   * Get the contacts module
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts')
    .controller('ContactsEditController', ContactsEditController);

  /**
   * @ngInject
   * @api public
   */

  function ContactsEditController($stateParams, contactsService) {
    var vm = this;
    vm.isLoading = false;

    vm.activate = activate;
    vm.update = update;

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

    /**
     * Update a contact
     *
     * @api public
     */

    function update() {
      var id = $stateParams.id;
      vm.isLoading = true;

      contactsService.update(id, vm.contact)
        .then(function(res) {
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
