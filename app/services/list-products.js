(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('listProductsService', listProductsService);

    listProductsService.$inject = ['$http', '$q', 'endpointURLService'];

    function listProductsService($http, $q, endpointURLService) {
        var methods = {
            getProducts: getProducts,
        };

        return methods;

        function getProducts(categoryId) {
            endpointURLService.ListProducts.url[1] = categoryId;
            var endpoint = {
                url: endpointURLService.ListProducts.url.join(''),
                method: endpointURLService.ListProducts.method[1]
            };
            var req = {
                url: endpoint.url,
                method: endpoint.method,
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
    }
})();