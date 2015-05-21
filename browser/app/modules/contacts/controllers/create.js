(function(angular, undefined) {
  'use strict';

  /**
   * Get the contacts module
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts')
    .controller('ContactsCreateController', ContactsCreateController);

  /**
   * @ngInject
   * @api public
   */

  function ContactsCreateController(contactsService) {
    var vm = this;
    vm.isLoading = false;
    vm.newContact = {
      name: '',
      phone: '',
      email: '',
      address: '',
      isFavorite: false
    };

    vm.create = create;

    /**
     * Create a new contact
     *
     * @api public
     */

    function create(contact) {
      vm.isLoading = true;

      contactsService.create(contact)
        .then(function(res) {
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
