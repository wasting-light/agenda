(function(angular, undefined) {
  'use strict';

  /**
   * Get the usuarios module
   *
   * @api public
   */

  angular
    .module('agenda.modules.usuarios')
    .controller('UsuariosEditController', UsuariosEditController);

  /**
   * @ngInject
   * @api public
   */

  function UsuariosEditController($stateParams, usuariosService) {
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

      usuariosService.findOne(id)
        .then(function(res) {
          vm.usuario = res.data;
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }

    /**
     * Update a usuario
     *
     * @api public
     */

    function update() {
      var id = $stateParams.id;
      vm.isLoading = true;

      usuariosService.update(id, vm.usuario)
        .then(function(res) {
          vm.isLoading = false;
        })
        .catch(function(res) {
          vm.isLoading = false;
        });
    }
  }

})(angular);
