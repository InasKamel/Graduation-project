(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('AddProductController', AddProductController);

  AddProductController.$inject = ['$state', 'ProductService'];
  function AddProductController($state, ProductService) {
    var vm = this;
    vm.categoryId = undefined;
    vm.isLoading = false;

    vm.product = {
      name: '',
      desc: '',
      price: '',
      dynamicFields: {
        colors: [],
        sizes: {
          s: false,
          m: false,
          l: false,
          xl: false,
          xxl: false,
          xxxl: false
        }
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
      vm.product.dynamicFields.colors.push({
        value: vm.colorPickerValue
      });
    }

    function deleteColor(color) {
      var index;
      for(var i = 0; i < vm.product.dynamicFields.colors.length; i++) {
        if(vm.product.dynamicFields.colors[i].value === color) {
          vm.product.dynamicFields.colors.splice(i, 1);
          i--;
        }
      }
    }

    function changeSize(size) {
      var newValue = !vm.product.dynamicFields.sizes[size];
      vm.product.dynamicFields.sizes[size] = newValue;
    }

    function addProduct() {
      vm.isLoading = true;
      ProductService
        .createProduct(vm.categoryId, vm.product)
        .then(function(res) {
          $state.go('dashboard.list-products', { id: vm.categoryId });
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
    }
  }
})();
