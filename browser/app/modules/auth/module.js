(function(angular, undefined) {
  'use strict';

  /**
   * Set the auth module
   *
   * @api public
   */

  angular
    .module('agenda.modules.auth', [
      'ui.router',
      'ngMaterial',
      'satellizer'
    ]);

})(angular);
