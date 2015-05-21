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

  function ContactsShowController($log, $stateParams, contactsService) {
    var vm = this;
    var Contact = contactsService;

    vm.contact = {};

    vm.init = init;

    vm.init();

    function init() {
      var id = $stateParams.id;

      Contact
        .findOne(id)
        .then(function(res) {
          vm.contact = res.data;
        });
    }
  }


})(angular);
