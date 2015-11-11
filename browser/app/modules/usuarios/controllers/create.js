(function(angular, undefined) {
  'use strict';

  /**
   * Get the usuarios module
   *
   * @api public
   */

  angular
    .module('agenda.modules.usuarios')
    .controller('UsuariosCreateController', UsuariosCreateController);

  /**
   * @ngInject
   * @api public
   */

  function UsuariosCreateController(usuariosService) {
    var vm = this;
    vm.isLoading = false;
    vm.newUsuario = {
      nome: '',
      sobrenome: '',
      data: '',
	  email: '',
	  telefone: '',
	  cpf: '',
	  endereco: ''
    };

    vm.create = create;

    /**
     * Create a new usuario
     *
     * @api public
     */

    function create(usuario) {
      vm.isLoading = true;

      usuariosService.create(usuario)
        .then(function(res) {
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
	  })
	  .finally(function() {
		  $location.path('/usuarios');
	  });
    }
  }

})(angular);
