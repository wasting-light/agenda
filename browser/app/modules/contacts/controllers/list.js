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

  function ContactsListController($log, contactsService, contactsPrepService) {
    var vm = this;

    vm.contacts = contactsPrepService.data;

    vm.remove = remove;

    function remove(id) {
      contactsService.remove(id)
        .then(function(res) {
          $log.info('Contact removed successfully');
        })
        .catch(function(res) {
          $log.error('Error removing contact');
        });
    }
  }


})(angular);
