(function () {
  'use strict';

  angular
    .module('dashboard')
    .config(routes);

  routes.$inject = ['$stateProvider'];
  function routes($stateProvider) {
    $stateProvider
      .state('dashboard.template', {
        url: '/template',
        templateUrl: 'modules/template/template.html',
        controller: 'TemplateController as ctrl',
        data: {}
      });
  }
})();
