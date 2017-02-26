(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ListProductsController', ListProductsController);

    ListProductsController.$inject = ['$state', 'ListProductsService'];
    function ListProductsController($state, ListProductsService) {
        var vm = this;
        vm.products = [];
        vm.categoryId = undefined;
        init();

        function init() {
            vm.categoryId = $state.params.id;
            ListProductsService
                .getProducts(vm.categoryId)
                .then(function(res) {
                    vm.products = res.data.products;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();