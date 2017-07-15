(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('OrdersController', OrdersController);

  OrdersController.$inject = ['$rootScope', '$state', '$timeout', 'ShopService'];
  function OrdersController($rootScope, $state, $timeout, ShopService) {
    var vm = this;
    vm.orders = [];
    vm.acceptOrder = acceptOrder;
    vm.rejectOrder = rejectOrder;
    init();

    function init() {
      $timeout(function () {
        ShopService
        .getOrders()
        .then(function (res) {
          vm.orders = res.data;
          $rootScope.showContent = true;
          $rootScope.loading = false;
        })
        .catch(function () {});
      }, 500);
    }

    function acceptOrder(orderId) {
      if(confirm('Are you sure you want to accept this order ?')) {
        $rootScope.loading = true;
        $timeout(function () {
          ShopService
          .acceptOrder(orderId)
          .then(function (res) {
            $state.reload();
          })
          .catch(function () {});
        }, 500);
      }
    }

    function rejectOrder(orderId) {
      if(confirm('Are you sure you want to reject this order ?')) {
        $rootScope.loading = true;
        $timeout(function () {
          ShopService
          .rejectOrder(orderId)
          .then(function (res) {
            $state.reload();
          })
          .catch(function () {});
        }, 500);
      }
    }
  }
})();
