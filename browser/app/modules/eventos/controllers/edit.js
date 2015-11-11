(function(angular, undefined) {
  'use strict';

  /**
   * Get the eventos module
   *
   * @api public
   */

  angular
    .module('agenda.modules.eventos')
    .controller('EventosEditController', EventosEditController);

  /**
   * @ngInject
   * @api public
   */

  function EventosEditController($stateParams, eventosService) {
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

      eventosService.findOne(id)
        .then(function(res) {
          vm.evento = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }

    /**
     * Update a evento
     *
     * @api public
     */

    function update() {
      var id = $stateParams.id;
      vm.isLoading = true;

      eventosService.update(id, vm.evento)
        .then(function(res) {
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
	  })
	  .finally(function() {
		  $location.path('/eventos');
	  });
    }
  }

})(angular);
