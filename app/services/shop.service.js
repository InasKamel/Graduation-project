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
      getGeneralStatistics: getGeneralStatistics,
      getOrders: getOrders,
      acceptOrder: acceptOrder,
      rejectOrder: rejectOrder
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

    function getGeneralStatistics() {
      var endpoint = EndpointService.get('getGeneralStatistics');
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
      };
      return $http(req);
    }

    function getOrders() {
      var endpoint = EndpointService.get('getOrders');
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
      };
      return $http(req);
    }

    function acceptOrder(orderId) {
      var endpoint = EndpointService.get('acceptOrder', orderId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
      };
      return $http(req);
    }

    function rejectOrder(orderId) {
      var endpoint = EndpointService.get('rejectOrder', orderId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
      };
      return $http(req);
    }

  }
})();
