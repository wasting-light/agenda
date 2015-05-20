(function(angular, undefined) {
  'use strict';

  /**
   * Module prototype
   *
   * @api public
   */

  angular
    .module('agenda', [
      'ngMaterial',
      'ui.router',
      'satellizer',
      'agenda.modules.contacts'
    ])
    .config(config);

  /**
   * Define the default config of the app
   *
   * @ngInject
   * @api public
   */
  function config($mdIconProvider) {
    $mdIconProvider.defaultIconSet('assets/icons/core-icons.svg', 26);
  }

})(angular);
