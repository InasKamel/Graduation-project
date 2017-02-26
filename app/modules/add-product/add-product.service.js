(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('AddProductService', AddProductService);

        AddProductService.$inject = ['$http', '$q', '$state'];

        function AddProductService($http, $q, $state) {
            var methods = {
                addProduct: addProduct,
            };
            return methods;

            function addProduct(newProduct) {
            var categoryId = $state.params.id;
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/categories/'+categoryId;
            var req = {
                method: 'POST',
                url: endpointURL,
                data: newProduct,
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