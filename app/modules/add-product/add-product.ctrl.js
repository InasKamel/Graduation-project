(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('AddProductController', AddProductController);

  AddProductController.$inject = ['$rootScope', '$state', '$timeout', '$q', 'ProductService'];
  function AddProductController($rootScope, $state, $timeout, $q, ProductService) {
    var vm = this;
    vm.categoryId = undefined;

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
      $timeout(function () {
        $rootScope.showContent = true;
        $rootScope.loading = false;
      }, 500);
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
      $rootScope.loading = true;
      ProductService
      .createProduct(vm.categoryId, vm.product)
      .then(function(res) {
        console.log(res.data.id);
        var payload = new FormData();
        if(vm.product.images) {
          Object.keys(vm.product.images).forEach(function(k) {
            var file = vm.product.images[k];
            payload.append('images', file);
          });
          return ProductService.addImage(res.data.id, payload);
        }
        return $q.resolve();
      })
      .then(function () {
        $state.go('dashboard.list-products', { id: vm.categoryId });
      })
      .catch(function(err) {
        // @TODO: handle the error
      });
    }
  }
})();
