(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('OrdersController', OrdersController);

  OrdersController.$inject = ['$rootScope', '$timeout'];
  function OrdersController($rootScope, $timeout) {
    var vm = this;
    init();

    function init () {
      $timeout(function () {
        $rootScope.showContent = true;
        $rootScope.loading = false;
      }, 500);
    }
  }
})();
