(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$state', 'ProductService'];
    function ProductController($state, ProductService) {
        var vm = this;
        vm.product = undefined;
        vm.deleteColor = deleteColor;

        var productId = $state.params.id;

        init();

        function init() {
            productId = $state.params.id;
            ProductService
                .getProduct(productId)
                .then(function(res) {
                    vm.product = res.data;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }

        function deleteColor(color) {
            ProductService
                .deleteColor(productId, color)
                .then(function(res) {
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();
