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

    /**
     * Create a new contact
     *
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function create(body) {
      var defer = $q.defer();

      $http.post('/api/contacts/', body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Retrieve all contacts
     *
     * @return {Object}
     * @api public
     */

    function retrieve() {
      var defer = $q.defer();

      $http.get('/api/contacts/')
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Find a contact by _id
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function findOne(id) {
      var defer = $q.defer();

      $http.get('/api/contacts/' + id)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Update a contact
     *
     * @param {Number} id
     * @param {Object} body
     * @return {Object}
     * @api public
     */

    function update(id, body) {
      var defer = $q.defer();

      $http.put('/api/contacts/' + id, body)
        .success(handleSuccess.bind(null, defer))
        .error(handleError.bind(null, defer));

      return defer.promise;
    }

    /**
     * Remove a contact
     *
     * @param {Number} id
     * @return {Object}
     * @api public
     */

    function remove(id) {
      var defer = $q.defer();

      $http.delete('/api/contacts/' + id)
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
