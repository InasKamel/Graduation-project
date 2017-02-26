(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('AddProductController', AddProductController);

        AddProductController.$inject = ['$state', 'AddProductService'];

        function AddProductController($state, AddProductService) {
            var vm = this;
            vm.fieldInEdit = undefined;

            vm.colorPickerValue = '#FF0000';
            vm.colorPickerOptions = {
            format: 'hex',
        };
            vm.productName = undefined;
            vm.productDesc = undefined;
            vm.productPrice = undefined;
            vm.productColors = [];
            vm.productSizes = {
                s: false,
                m: false,
                l: false,
                xl: false,
                xxl: false,
                xxxl: false
            };

            vm.addColor = addColor;
            vm.deleteColor = deleteColor;
            vm.changeSize = changeSize;
            vm.addProduct = addProduct;
            
            function addColor() {
                vm.productColors.push(vm.colorPickerValue);
                vm.fieldInEdit = undefined;
            }
            function deleteColor(color) {
                var index;
                while((index = vm.productColors.indexOf(color)) !== -1) {
                    vm.productColors.splice(index, 1);
                }
            }
            function changeSize(size) {
            var newValue = !vm.productSizes[size];
            vm.productSizes[size] = newValue;
        }
        function addProduct() {
            var newProduct = {
                name: vm.productName,
                desc: vm.productDesc,
                price: vm.productPrice,
                colors: vm.productColors,
                sizes: vm.productSizes
            };
            AddProductService
                .addProduct(newProduct)
                .then(function(res) {
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
    }
})();