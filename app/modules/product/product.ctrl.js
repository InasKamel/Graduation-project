(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$state', 'ProductService'];
    function ProductController($state, ProductService) {
        var vm = this;
        vm.product = undefined;

        init();

        function init() {
            var productId = $state.params.id;
            ProductService
                .getProduct(productId)
                .then(function(res) {
                    vm.product = res.data;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();