(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$state', 'ProductService','$scope'];
    function ProductController($state, ProductService,$scope) {
        var vm = this;
        vm.product = undefined;
       init();
    

        function init() {
         var productId = $state.params.id;
            ProductService
                .getProduct(productId)
                .then(function(res) {
                    vm.product = res.data;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
        }
       $scope.btnClick = function(color){
            var productId = $state.params.id;
            console.log("clicked");
             ProductService
             .deleteColor(productId,color)
              .then(function(res) {
                    vm.product = res.data;
                })
                .catch(function(err) {
                    // @TODO: handle the error
                });
            
        }
      

    }
})();