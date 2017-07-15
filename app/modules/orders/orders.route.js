(function () {
  'use strict';

  angular
    .module('dashboard')
    .config(routes);

  routes.$inject = ['$stateProvider'];
  function routes($stateProvider) {
    $stateProvider
      .state('dashboard.orders', {
        url: '/orders',
        templateUrl: 'modules/orders/orders.html',
        controller: 'OrdersController as ctrl',
        data: {}
      });
  }
})();
