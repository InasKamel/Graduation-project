(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$state', 'ProductService'];
    function ProductController($state, ProductService) {
        var vm = this;
        vm.product = undefined;
        vm.editIcon = undefined;
        vm.newValue = undefined;
        vm.editProduct = editProduct;

        var productId;

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

        function editProduct(attribute) {
             ProductService
                .editProduct(productId, attribute, vm.newValue)
                .then(function(res) {
                    vm.product[attribute] = vm.newValue;
                    vm.editIcon = undefined;
                    vm.newValue = undefined;
                })
                .catch(function(err) {
                    //   @TODO: handle he error
                });
        }
    }
})();
