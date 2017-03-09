(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('addProductService', addProductService);

    addProductService.$inject = ['$http', '$q', 'endpointURLService'];

    function addProductService($http, $q, endpointURLService) {
        var methods = {
            addProduct: addProduct,
        };

        return methods;

        function addProduct(categoryId, productData) {
            endpointURLService.ListProducts.url[1] = categoryId;
            var endpoint ={ 
                url: endpointURLService.ListProducts.url.join(''),
                method: endpointURLService.ListProducts.method[0]
            };
            var req = {
                url: endpoint.url,
                method: endpoint.method,
                headers: {},
                data: productData,
            };

            return $http(req)
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    $q.reject(err);
                });
        }
    }
})();
