(function(angular, undefined) {
  'use strict';

  /**
   * Get the usuarios module
   *
   * @api public
   */

  angular
    .module('agenda.modules.usuarios')
    .controller('UsuariosListController', UsuariosListController);

  /**
   * @ngInject
   * @api public
   */

  function UsuariosListController(usuariosService) {
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

      usuariosService.retrieve()
        .then(function(res) {
          vm.usuarios = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }

    /**
     * Remove a usuario
     *
     * @api public
     */

    function remove(id, index) {
      vm.isLoading = true;

      usuariosService.remove(id, vm.usuario)
        .then(function(res) {
          vm.usuarios.splice(index, 1);
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
