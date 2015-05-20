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
    ]);

})(angular);
