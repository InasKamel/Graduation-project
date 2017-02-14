(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ListProductsController', ListProductsController);

    ListProductsController.$inject = ['$state', 'ListProductsService'];
    function ListProductsController($state, ListProductsService) {
        var vm = this;
        vm.products = [];

        init();

        function init() {
            var categoryId = $state.params.id;
            ListProductsService
                .getProducts(categoryId)
                .then(function(res) {
                    vm.products = res.data.products;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();