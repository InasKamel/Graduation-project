(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', '$q', 'endpointURLService'];

    function DashboardService($http, $q, endpointURLService) {
        var methods = {
            getShopInfo: getShopInfo,
            getCategories: getCategories,
        };
        return methods;

        function getShopInfo() {
            var endpoint ={ 
                url: endpointURLService.ShopInfo.url,
                method: endpointURLService.ShopInfo.method
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

        function getCategories() {
            var endpoint ={ 
                url: endpointURLService.Categories.url,
                method: endpointURLService.Categories.method
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