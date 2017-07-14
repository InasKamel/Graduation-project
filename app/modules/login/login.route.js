(function () {
  'use strict';

  angular
    .module('dashboard')
    .config(routes);

  routes.$inject = ['$stateProvider'];
  function routes($stateProvider) {
    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'modules/login/login.html',
      controller: 'LoginController as ctrl',
      data: {}
    });
  }
})();
