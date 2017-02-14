(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('ListProductsService', ListProductsService);

    ListProductsService.$inject = ['$http', '$q'];
    function ListProductsService($http, $q) {
        var methods = {
            getProducts: getProducts,
        };
        return methods;

        function getProducts(categoryId) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/categories/' + categoryId;
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
    }
})();