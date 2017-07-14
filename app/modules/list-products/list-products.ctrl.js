(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('ListProductsController', ListProductsController);

  ListProductsController.$inject = ['$state', 'ProductService'];
  function ListProductsController($state, ProductService) {
    var vm = this;
    vm.categoryId = undefined;
    vm.products = [];

    init();

    function init() {
      vm.categoryId = $state.params.id;
      ProductService
      .getProducts(vm.categoryId)
      .then(function(res) {
        vm.products = res.data;
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(function (n) {
          vm.products.push(n);
        });
      })
      .catch(function(err) {
        // @TODO: handle the error
      });
    }
  }
})();
