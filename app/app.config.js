(function () {
  'use strict';

  angular
    .module('dashboard')
    .factory('httpInterceptor', httpInterceptor)
    .config(appConfiguration);

  appConfiguration.$inject = ['$authProvider', '$urlRouterProvider', '$httpProvider'];
  function appConfiguration($authProvider, $urlRouterProvider, $httpProvider) {
    // Satellizer
    $authProvider.loginUrl = 'http://localhost:3000/api/v1/web/login';
    $authProvider.tokenName = 'accessToken';
    $authProvider.tokenHeader = 'X-Access-Token';
    $authProvider.tokenPrefix = '';
    $authProvider.tokenType = '';
    $urlRouterProvider.when('', '/statistics');    // Home page
    $urlRouterProvider.otherwise('/statistics');    // Home page

    $httpProvider.interceptors.push('httpInterceptor');
  }

  httpInterceptor.$inject = ['$injector', '$q'];
  function httpInterceptor($injector, $q) {
    return {
      responseError: function (rejection) {
        var $auth = $injector.get('$auth');
        if(rejection.status === 401 && $auth.isAuthenticated()) {
          $auth.logout();
          window.location = '/';
          return;
        }
        return $q.reject(rejection);
      }
    };
  }
})();
