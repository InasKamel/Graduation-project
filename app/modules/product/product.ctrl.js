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
        vm.attribute = undefined;
        vm.newValue = undefined;

        vm.editProduct = editProduct;
        vm.changeSize = changeSize;

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

        function editProduct() {
             ProductService
                .editProduct(productId, vm.attribute, vm.newValue)
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                //   @TODO: handle he error
                });
            $state.reload();
        }

        function changeSize(size) {
            var newValue = !vm.product.sizes[size];
            ProductService
                .updateSizes(productId, size, newValue)
                .then(function(res) {
                    vm.product.sizes[size] = newValue;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();
