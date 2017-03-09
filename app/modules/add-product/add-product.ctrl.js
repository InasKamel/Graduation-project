(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('AddProductController', AddProductController);

    AddProductController.$inject = ['$state', 'addProductService'];

    function AddProductController($state, addProductService) {
        var vm = this;
        vm.categoryId = undefined;
        vm.isLoading = false;
        vm.product = {
            name: '',
            desc: '',
            price: '',
            colors: [],
            sizes: {
                s: false,
                m: false,
                l: false,
                xl: false,
                xxl: false,
                xxxl: false
            }
        };
        vm.colorPickerValue = '#FF0000';
        vm.colorPickerOptions = {
            format: 'hex',
        };
        vm.addColor = addColor;
        vm.deleteColor = deleteColor;
        vm.changeSize = changeSize;
        vm.addProduct = addProduct;

        init();

        function init() {
            vm.categoryId = $state.params.id;
        }

        function addColor() {
            vm.product.colors.push(vm.colorPickerValue);
        }

        function deleteColor(color) {
            var index;
            while((index = vm.product.colors.indexOf(color)) !== -1) {
                vm.product.colors.splice(index, 1);
            }
        }

        function changeSize(size) {
            var newValue = !vm.product.sizes[size];
            vm.product.sizes[size] = newValue;
        }

        function addProduct() {
            vm.isLoading = true;

            addProductService
                .addProduct(vm.categoryId, vm.product)
                .then(function(res) {
                    $state.go('dashboard.list-products', { id: vm.categoryId });
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();