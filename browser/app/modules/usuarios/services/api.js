(function(angular, undefined) {
  'use strict';

  /**
   * Get the usuarios module
   *
   * @api public
   */

  angular
    .module('agenda.modules.usuarios')
    .service('usuariosService', usuariosService);

  /**
   * Consume the usuarios server API
   *
   * @ngInject
   * @api public
   */

  function usuariosService($http, $q) {
    this.create   = create;
    this.retrieve = retrieve;
    this.findOne  = findOne;
    this.update   = update;
    this.remove   = remove;

    /**
     * Create a new usuario
     *
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function create(body) {
      var defer = $q.defer();

      $http.post('/api/usuarios/', body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Retrieve all usuarios
     *
     * @return {Object}
     * @api public
     */

    function retrieve() {
      var defer = $q.defer();

      $http.get('/api/usuarios/')
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Find a usuario by _id
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function findOne(id) {
      var defer = $q.defer();

      $http.get('/api/usuarios/' + id)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Update a usuario
     *
     * @param {Number} id
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function update(id, body) {
      var defer = $q.defer();

      $http.put('/api/usuarios/' + id, body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Remove a usuario
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function remove(id) {
      var defer = $q.defer();

      $http.delete('/api/usuarios/' + id)
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
