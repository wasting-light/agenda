(function(angular, undefined) {
  'use strict';

  /**
   * Set the users module
   *
   * @api public
   */

  angular
    .module('agenda.modules.users', [
      'ui.router',
      'ngMaterial',
      'satellizer'
    ]);

})(angular);
