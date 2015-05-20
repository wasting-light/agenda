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

  function ContactsCreateController($scope, $log, contactsService) {
    var vm = this;
    var Contact = contactsService;

    vm.newContact = {
      name: 'Guilherme',
      phone: '1140382629',
      email: 'gui@gmail.com',
      address: 'Rua Rio Jundiaí, 225',
      isFavorite: false
    };

    vm.create = create;

    function create(contact) {
      Contact
        .create(vm.newContact)
        .then(function(res) {
          $log.info(res);
        })
        .catch(function(res) {
          $log.info(res);
        });
    }
  }

})(angular);
