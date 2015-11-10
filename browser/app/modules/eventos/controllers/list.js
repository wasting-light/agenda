(function(angular, undefined) {
  'use strict';

  /**
   * Get the eventos module
   *
   * @api public
   */

  angular
    .module('agenda.modules.eventos')
    .controller('EventosListController', EventosListController);

  /**
   * @ngInject
   * @api public
   */

  function EventosListController(eventosService) {
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

      eventosService.retrieve()
        .then(function(res) {
          vm.eventos = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }

    /**
     * Remove a evento
     *
     * @api public
     */

    function remove(id, index) {
      vm.isLoading = true;

      eventosService.remove(id, vm.evento)
        .then(function(res) {
          vm.eventos.splice(index, 1);
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
