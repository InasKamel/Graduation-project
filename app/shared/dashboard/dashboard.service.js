(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', '$q'];
    function DashboardService($http, $q) {
        var methods = {
            getShopInfo: getShopInfo,
        };
        return methods;

        function getShopInfo() {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/shop_info';
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