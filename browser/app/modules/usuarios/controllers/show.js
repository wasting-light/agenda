(function(angular, undefined) {
  'use strict';

  /**
   * Get the usuarios module
   *
   * @api public
   */

  angular
    .module('agenda.modules.usuarios')
    .controller('UsuariosShowController', UsuariosShowController);

  /**
   * @ngInject
   * @api public
   */

  function UsuariosShowController($stateParams, usuariosService) {
    var vm = this;
    vm.isLoading = false;

    vm.activate = activate;

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
  }

})(angular);
