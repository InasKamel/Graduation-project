(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['$http', '$q'];
    function ProductService($http, $q) {
        var methods = {
            getProduct: getProduct,
            editProduct: editProduct,
            updateSizes: updateSizes,
            deleteColor: deleteColor,
            addColor: addColor
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

        function editProduct(productId, attribute, newValue) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/products/' + productId;
            var req = {
                method: 'PATCH',
                url: endpointURL,
                headers: {},
                data: {},
            };

            req.data[attribute] = newValue;

            return $http(req)
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return $q.reject(err);
                });
        }

        function updateSizes(productId, size, value) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/products/' + productId + '/sizes';
            var req = {
                method: 'PATCH',
                url: endpointURL,
                headers: {},
                data: {},
            };

            req.data[size] = value;

            return $http(req)
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return $q.reject(err);
                });
        }

        function deleteColor(productId, color) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/products/' + productId + '/colors';
            var req = {
                method: 'DELETE',
                url: endpointURL,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                data: {
                    value: color,
                }
            };

            return $http(req)
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return $q.reject(err);
                });
        }

        function addColor(productId, color) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/products/' + productId + '/colors';
            var req = {
                method: 'POST',
                url: endpointURL,
                headers: {},
                data: {
                    value: color,
                }
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
