(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['$rootScope', '$state', '$timeout', 'ProductService'];
  function ProductController($rootScope, $state, $timeout, ProductService) {
    var vm = this;
    vm.product = undefined;
    vm.feildInEdit = undefined;

    vm.colorPickerValue= '#FF0000';
    vm.colorPickerOptions = {
      format: 'hex'
    };

    vm.updateProduct = updateProduct;
    vm.changeSize = changeSize;
    vm.removeColor = removeColor;
    vm.addColor = addColor;
    vm.addImages = addImages;
    vm.removeImage = removeImage;

    vm.currentImage = 0;
    vm.newImages = undefined;

    var productId;

    init();

    function init() {
      productId = $state.params.id;
      $timeout(function () {
        ProductService
        .getProduct(productId)
        .then(function(res) {
          vm.product = res.data;
          $rootScope.showContent = true;
          $rootScope.loading = false;
        })
        .catch(function(err) {
          if(err.status === 404) {
            window.location = '/';
          }
          // @TODO: handle the error
        });
      }, 500);
    }

    function updateProduct(attribute, newValue) {
      $rootScope.loading = true;
      $timeout(function() {
        ProductService
        .updateProduct(productId, attribute, newValue)
        .then(function(res) {
          vm.product[attribute] = newValue;
          vm.feildInEdit = undefined;
          $rootScope.loading = false;
        })
        .catch(function(err) {
          //   @TODO: handle he error
        });
      }, 300);
    }

    function changeSize(size) {
      $rootScope.loading = true;
      $timeout(function() {
        var newValue = !vm.product.dynamicFields.sizes[size];
        ProductService
        .updateSizes(productId, size, newValue)
        .then(function(res) {
          vm.product.dynamicFields.sizes[size] = newValue;
          $rootScope.loading = false;
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
      }, 300);
    }

    function removeColor(colorId) {
      $rootScope.loading = true;
      $timeout(function() {
        ProductService
        .removeColor(productId, colorId)
        .then(function(res) {
          for(var i = 0; i < vm.product.dynamicFields.colors.length; i++) {
            if(vm.product.dynamicFields.colors[i].id === colorId) {
              vm.product.dynamicFields.colors.splice(i, 1);
              break;
            }
          }
          $rootScope.loading = false;
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
      }, 300);
    }

    function addColor() {
      $rootScope.loading = true;
      $timeout(function() {
        ProductService
        .addColor(productId, vm.colorPickerValue)
        .then(function(res) {
          vm.product.dynamicFields.colors.push(res.data);
          vm.feildInEdit = undefined;
          $rootScope.loading = false;
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
      }, 300);
    }

    function addImages() {
      if(vm.newImages) {
        $rootScope.loading = true;
        var payload = new FormData();
        Object.keys(vm.newImages).forEach(function(k) {
          var file = vm.newImages[k];
          payload.append('images', file);
        });

        ProductService.addImage(productId, payload)
        .then(function(res) {
          $state.reload();
        })
        .catch(function(err) {
          // @TODO: handle the error
        });
      }
    }

    function removeImage(imageId) {
      if(confirm('Are you sure you want to remove this image ?')) {
        $rootScope.loading = true;
        $timeout(function() {
          ProductService.removeImage(productId, imageId)
          .then(function(res) {
            $state.reload();
          })
          .catch(function(err) {
            // @TODO: handle the error
          });
        }, 300);
      }
    }
  }
})();
