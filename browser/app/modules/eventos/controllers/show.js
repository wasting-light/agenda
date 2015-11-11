(function(angular, undefined) {
  'use strict';

  /**
   * Get the eventos module
   *
   * @api public
   */

  angular
    .module('agenda.modules.eventos')
    .controller('EventosShowController', EventosShowController);

  /**
   * @ngInject
   * @api public
   */

  function EventosShowController($stateParams, $location, eventosService) {
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

	function remove(id, index) {
	  vm.isLoading = true;

	  eventosService.remove(id)
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
