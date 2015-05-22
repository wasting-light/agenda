(function(angular, undefined) {
  'use strict';

  /**
   * Get the users module
   *
   * @api public
   */

  angular
    .module('agenda.modules.users')
    .service('usersService', usersService);

  /**
   * Consume the users server API
   *
   * @ngInject
   * @api public
   */

  function usersService($http, $q) {
    this.create   = create;
    this.retrieve = retrieve;
    this.findOne  = findOne;
    this.update   = update;
    this.remove   = remove;

    /**
     * Create a new user
     *
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function create(body) {
      var defer = $q.defer();

      $http.post('/api/users/', body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Retrieve all users
     *
     * @return {Object}
     * @api public
     */

    function retrieve() {
      var defer = $q.defer();

      $http.get('/api/users/')
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Find a user by _id
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function findOne(id) {
      var defer = $q.defer();

      $http.get('/api/users/' + id)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Update a user
     *
     * @param {Number} id
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function update(id, body) {
      var defer = $q.defer();

      $http.put('/api/users/' + id, body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Remove a user
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function remove(id) {
      var defer = $q.defer();

      $http.delete('/api/users/' + id)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }
  }

  /**
   * Handle successful requests
   *
   * @param {Object} defer
   */

  function handleSuccess(defer, data, status) {
    defer.resolve({ data: data, status: status });
  }

  /**
   * Handle unsuccessful requests
   *
   * @param {Object} defer
   */

  function handleError(defer, data, status) {
    defer.reject({ banana: data, status: status });
  }
})(angular);
