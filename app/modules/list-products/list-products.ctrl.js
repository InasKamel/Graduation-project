(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ListProductsController', ListProductsController);

    ListProductsController.$inject = ['$state', 'listProductsService'];

    function ListProductsController($state, listProductsService) {
        var vm = this;
        vm.categoryId = undefined;
        vm.products = [];
 
        init();

        function init() {
            vm.categoryId = $state.params.id;
            listProductsService
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