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

  function ContactsEditController($scope, $stateParams, $log, contactsService) {
    var vm = this;
    var Contact = contactsService;

    vm.contact = {};

    vm.init = init;
    vm.update = update;

    vm.init();

    function init() {
      var id = $stateParams.id;

      Contact
        .findOne(id)
        .then(function(res) {
          $log.info(res);
          vm.contact = res.data;
        })
        .catch(function(res) {
          $log.info(res);
        });
    }

    function update() {
      var id = $stateParams.id;

      Contact
        .update(id, vm.contact)
        .then(function(res) {
          $log.info(res);
        })
        .catch(function(res) {
          $log.info(res);
        });
    }
  }

})(angular);
