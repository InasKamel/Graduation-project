(function () {
  'use strict';

  angular
    .module('dashboard')
    .config(routes);

  routes.$inject = ['$stateProvider'];
  function routes($stateProvider) {
    $stateProvider
      .state('dashboard.statistics', {
        url: '/statistics',
        templateUrl: 'modules/statistics/statistics.html',
        controller: 'StatisticsController as ctrl',
        data: {}
      });
  }
})();
