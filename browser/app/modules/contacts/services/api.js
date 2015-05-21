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
    this.create   = create;
    this.retrieve = retrieve;
    this.findOne  = findOne;
    this.update   = update;
    this.remove   = remove;

    function create(body) {
      var defer = $q.defer();

      $http
        .post('/api/contacts/', body)
        .success(function(data, status) {
          defer.resolve({data: data, status: status});
        })
        .error(function(data, status) {
          defer.reject({data: data, status: status});
        });

      return defer.promise;
    }

    function retrieve() {
      var defer = $q.defer();

      $http
        .get('/api/contacts/')
        .success(function(data, status) {
          defer.resolve({data: data, status: status});
        })
        .error(function(data, status) {
          defer.reject({data: data, status: status});
        });

      return defer.promise;
    }

    function findOne(id) {
      var defer = $q.defer();

      $http
        .get('/api/contacts/' + id)
        .success(function(data, status) {
          defer.resolve({data: data, status: status});
        })
        .error(function(data, status) {
          defer.reject({data: data, status: status});
        });

      return defer.promise;
    }

    function update(id, body) {
      var defer = $q.defer();

      $http
        .put('/api/contacts/' + id, body)
        .success(function(data, status) {
          defer.resolve({data: data, status: status});
        })
        .error(function(data, status) {
          defer.reject({data: data, status: status});
        });

      return defer.promise;
    }

    function remove(id) {
      var defer = $q.defer();

      $http
        .delete('/api/contacts/' + id)
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
