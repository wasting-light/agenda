(function(angular, undefined) {
  'use strict';

  /**
   * Get the eventos module
   *
   * @api public
   */

  angular
    .module('agenda.modules.eventos')
    .service('eventosService', eventosService);

  /**
   * Consume the eventos server API
   *
   * @ngInject
   * @api public
   */

  function eventosService($http, $q) {
    this.create   = create;
    this.retrieve = retrieve;
    this.findOne  = findOne;
    this.update   = update;
    this.remove   = remove;

    /**
     * Create a new evento
     *
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function create(body) {
      var defer = $q.defer();

      $http.post('/api/eventos/', body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Retrieve all eventos
     *
     * @return {Object}
     * @api public
     */

    function retrieve() {
      var defer = $q.defer();

      $http.get('/api/eventos/')
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Find a evento by _id
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function findOne(id) {
      var defer = $q.defer();

      $http.get('/api/eventos/' + id)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Update a evento
     *
     * @param {Number} id
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function update(id, body) {
      var defer = $q.defer();

      $http.put('/api/eventos/' + id, body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Remove a evento
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function remove(id) {
      var defer = $q.defer();

      $http.delete('/api/eventos/' + id)
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
