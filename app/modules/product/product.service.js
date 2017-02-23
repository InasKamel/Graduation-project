(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('ProductService', ProductService)
       
    ProductService.$inject = ['$http', '$q'];
    function ProductService($http, $q) {
        var methods = {
            getProduct: getProduct,
            deleteColor
        };
        return methods;

        function getProduct(productId) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/products/' + productId;
            var req = {
                method: 'GET',
                url: endpointURL,
                headers: {},
            };

            return $http(req)
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return $q.reject(err);
                });
        }
         function deleteColor(productId,color) {
             console.log(color)
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/products/' + productId+'colors/'+color;
            var req = {
                method: 'DELETE',
                url: endpointURL,
                headers: {},
            };

            return $http(req,{colors:color})
                .then(function(res) {
                    return res;
                    console.log(res);
                })
                .catch(function(err) {
                    console.log("error");
                    return $q.reject(err);
                });
        }
              
        
    }
})();