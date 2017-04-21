(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('ShopService', ShopService);

    ShopService.$inject = ['$http', 'EndpointService'];
    function ShopService($http, EndpointService) {
        var methods = {
            getShopInfo: getShopInfo,
            updateShopInfo: updateShopInfo,
        };
        return methods;

        function getShopInfo() {
            var endpoint = EndpointService.get('getShopInfo');
            var req = {
                method: endpoint.method,
                url: endpoint.url,
                headers: {},
            };
            return $http(req);
        }

        function updateShopInfo(attribute, newValue) {
            var endpoint = EndpointService.get('updateShopInfo');
            var req = {
                method: endpoint.method,
                url: endpoint.url,
                headers: {},
                data: {},
            };
            req.data[attribute] = newValue;
            return $http(req);
        }
    }
})();
