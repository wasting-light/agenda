(function(angular, undefined) {
  'use strict';

  /**
   * Get the eventos module
   *
   * @api public
   */

  angular
    .module('agenda.modules.eventos')
    .controller('EventosCreateController', EventosCreateController);

  /**
   * @ngInject
   * @api public
   */

  function EventosCreateController(eventosService) {
    var vm = this;
    vm.isLoading = false;
    vm.newEvento = {
      nome: '',
      local: '',
      data: '',
      horario: ''
    };

    vm.create = create;

    /**
     * Create a new evento
     *
     * @api public
     */

    function create(evento) {
      vm.isLoading = true;

      eventosService.create(evento)
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
