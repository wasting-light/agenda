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

  function ContactsListController($log, contactsService) {
    var vm = this;
    var Contact = contactsService;

    vm.users = [1, 2, 3];

    vm.init = init;

    vm.init();

    function init() {
      Contact
        .retrieve()
        .then(function(res) {
          vm.users = res.data;
        });
    }
  }


})(angular);
