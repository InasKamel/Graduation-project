(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$state', 'ProductService'];

    function ProductController($state, ProductService) {
        var vm = this;
        var productId;
        vm.product = undefined;
        vm.feildInEdit = undefined;
        vm.isLoading = false;
        vm.colorPickerValue= '#FF0000';
        vm.colorPickerOptions = {
            format: 'hex',
            disabled: vm.isLoading,
        };
        vm.editProduct = editProduct;
        vm.changeSize = changeSize;
        vm.deleteColor = deleteColor;
        vm.addColor = addColor;

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
            vm.isLoading = true;
            var newValue = !vm.product.sizes[size];
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
            vm.isLoading = true;
            ProductService
                .deleteColor(productId, color)
                .then(function(res) {
                    var index;
                    while((index = vm.product.colors.indexOf(color)) !== -1) {
                        vm.product.colors.splice(index, 1);
                    }
                    vm.isLoading = false;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }

        function addColor() {
            vm.isLoading = true;
            ProductService
                .addColor(productId, vm.colorPickerValue)
                .then(function(res) {
                    vm.product.colors.push(vm.colorPickerValue);
                    vm.feildInEdit = undefined;
                    vm.isLoading = false;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();
