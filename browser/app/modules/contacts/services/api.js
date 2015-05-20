(function(angular, undefined) {
  'use strict';

  /**
   * Get the contacts module
   *
   * @api public
   */

  angular
    .module('agenda.modules.contacts')
    .service('contactsService', contactsService);

  /**
   * Consume the contacts server API
   *
   * @ngInject
   * @api public
   */

  function contactsService($http, $q) {
    var baseUrl = '/api/contacts/';

    // this.create   = create;
    this.retrieve = retrieve;
    // this.findOne  = findOne;
    // this.update   = update;
    // this.remove   = remove;

    function retrieve() {
      var defer = $q.defer();

      $http
        .get(baseUrl)
        .success(function(data, status) {
          defer.resolve({data: data, status: status});
        })
        .error(function(data, status) {
          defer.reject({data: data, status: status});
        });

      return defer.promise;
    }
  }

})(angular);
