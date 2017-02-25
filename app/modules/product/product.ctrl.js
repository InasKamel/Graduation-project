(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$state', 'ProductService'];
    function ProductController($state, ProductService) {
        var vm = this;
        vm.product = undefined;
        vm.feildInEdit = undefined;
        vm.isLoading = false;

        vm.editProduct = editProduct;
        vm.changeSize = changeSize;
        vm.deleteColor = deleteColor;

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

        function editProduct(attribute, newValue) {
            vm.isLoading = true;
            ProductService
                .editProduct(productId, attribute, newValue)
                .then(function(res) {
                    vm.product[attribute] = newValue;
                    vm.feildInEdit = undefined;
                    vm.isLoading = false;
                })
                .catch(function(err) {
                    //   @TODO: handle he error
                });
        }

        function changeSize(size) {
            var newValue = !vm.product.sizes[size];
            vm.isLoading = true;
            ProductService
                .updateSizes(productId, size, newValue)
                .then(function(res) {
                    vm.product.sizes[size] = newValue;
                    vm.isLoading = false;
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
