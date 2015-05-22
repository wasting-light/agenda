(function(angular, undefined) {
  'use strict';

  /**
   * Set the toolbar module
   *
   * @api public
   */

  angular
    .module('agenda.layout.toolbar', [
      'ui.router',
      'ngMaterial',
      'satellizer'
    ]);

})(angular);
