(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('AddProductService', AddProductService);

    AddProductService.$inject = ['$http', '$q'];
    function AddProductService($http, $q) {
        var methods = {
            addProduct: addProduct,
        };
        return methods;

        function addProduct(categoryId, productData) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/categories/' + categoryId;
            var req = {
                method: 'POST',
                url: endpointURL,
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
