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

    vm.colorPickerValue= '#FF0000';
    vm.colorPickerOptions = {
      format: 'hex',
      disabled: vm.isLoading,
    };

    vm.updateProduct = updateProduct;
    vm.changeSize = changeSize;
    vm.removeColor = removeColor;
    vm.addColor = addColor;

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

    function updateProduct(attribute, newValue) {
      vm.isLoading = true;
      ProductService
        .updateProduct(productId, attribute, newValue)
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
      var newValue = !vm.product.dynamicFields.sizes[size];
      ProductService
        .updateSizes(productId, size, newValue)
        .then(function(res) {
          vm.product.dynamicFields.sizes[size] = newValue;
          vm.isLoading = false;
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
    }

    function removeColor(colorId) {
      vm.isLoading = true;
      ProductService
        .removeColor(productId, colorId)
        .then(function(res) {
          for(var i = 0; i < vm.product.dynamicFields.colors.length; i++) {
            if(vm.product.dynamicFields.colors[i].id === colorId) {
              vm.product.dynamicFields.colors.splice(i, 1);
              break;
            }
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
          vm.product.dynamicFields.colors.push(res.data);
          vm.feildInEdit = undefined;
          vm.isLoading = false;
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
    }
  }
})();
