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

  function ContactsShowController(contactPrepService) {
    var vm = this;

    vm.contact = contactPrepService.data;
  }

})(angular);
