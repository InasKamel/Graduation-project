(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('ListProductsController', ListProductsController);

  ListProductsController.$inject = ['$rootScope', '$state', '$timeout', 'ProductService'];
  function ListProductsController($rootScope, $state, $timeout, ProductService) {
    var vm = this;
    $rootScope.pageTitle = 'Products';
    vm.categoryId = undefined;
    vm.products = [];

    init();

    function init() {
      vm.categoryId = $state.params.id;
      $timeout(function () {
        ProductService
        .getProducts(vm.categoryId)
        .then(function(res) {
          vm.products = res.data;
          $rootScope.showContent = true;
          $rootScope.loading = false;
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
      }, 500);
    }
  }
})();
