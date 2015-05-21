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

  function ContactsEditController(contactsService, contactPrepService) {
    var vm = this;

    vm.contact = contactPrepService.data;

    vm.update = update;

    function update() {
      var id = $stateParams.id;

      contactsService.update(id, vm.contact)
        .then(function(res) {
          $log.info('Contact updated successfully');
        })
        .catch(function(res) {
          $log.error('Error updating contact');
        });
    }
  }

})(angular);
