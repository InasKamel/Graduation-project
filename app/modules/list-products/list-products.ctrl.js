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
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();
