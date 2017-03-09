(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['$http', '$q', 'endpointURLService'];

    function ProductService($http, $q, endpointURLService) {
        var methods = {
            getProduct: getProduct,
            editProduct: editProduct,
            updateSizes: updateSizes,
            deleteColor: deleteColor,
            addColor: addColor
        };

        return methods;

        function getProduct(productId) {
            endpointURLService.Product.url[1] = productId;
            var endpoint = {
                url: endpointURLService.Product.url.join(''),
                method: endpointURLService.Product.method[0]
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

        function editProduct(productId, attribute, newValue) {
            endpointURLService.Product.url[1] = productId;
            var endpoint ={
                url: endpointURLService.Product.url.join(''),
                method: endpointURLService.Product.method[1]
            };
            var req = {
                url: endpoint.url,
                method: endpoint.method,
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
            endpointURLService.UpdateSizes.url[1] = productId;
            var endpoint = {
                url: endpointURLService.UpdateSizes.url.join(''),
                method: endpointURLService.UpdateSizes.method
            };
            var req = {
                url: endpoint.url,
                method: endpoint.method,
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
            endpointURLService.Color.url[1] = productId;
            var endpoint = {
                url: endpointURLService.Color.url.join(''),
                method: endpointURLService.Color.method[0]
            };
            var req = {
                url: endpoint.url,
                method: endpoint.method,
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
            endpointURLService.Color.url[1] = productId;
            var endpoint = {
                url: endpointURLService.Color.url.join(''),
                method: endpointURLService.Color.method[1]
            };
            var req = {
                url: endpoint.url,
                method: endpoint.method,
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
