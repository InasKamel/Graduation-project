(function () {
  'use strict';

  angular
    .module('dashboard')
    .factory('ProductService', ProductService);

  ProductService.$inject = ['$http', 'EndpointService'];
  function ProductService($http, EndpointService) {
    var methods = {
      getProducts: getProducts,
      getProduct: getProduct,
      createProduct: createProduct,
      updateProduct: updateProduct,
      addImage: addImage,
      removeImage: removeImage,
      addColor: addColor,
      removeColor: removeColor,
      updateSizes: updateSizes,
    };
    return methods;

    function getProducts(categoryId, limit, page) {
      var endpoint = EndpointService.get('getProducts', categoryId, limit, page);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
      };
      return $http(req);
    }

    function getProduct(productId) {
      var endpoint = EndpointService.get('getProduct', productId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
      };
      return $http(req);
    }

    function createProduct(categoryId, productData) {
      productData.categoryId = categoryId;
      var endpoint = EndpointService.get('createProduct');
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
        data: productData,
      };
      return $http(req);
    }

    function updateProduct(productId, attribute, newValue) {
      var endpoint = EndpointService.get('updateProduct', productId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
        data: {},
      };
      req.data[attribute] = newValue;
      return $http(req);
    }

    function addImage(productId, payload) {
      var endpoint = EndpointService.get('addProductImages', productId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: { 'Content-Type': undefined },
        transformRequest: angular.identity,
        data: payload
      };
      return $http(req);
    }

    function removeImage(productId, imageId) {
      var endpoint = EndpointService.get('removeProductImage', productId, imageId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
        data: {},
      };
      return $http(req);
    }

    function addColor(productId, color) {
      var endpoint = EndpointService.get('addProductColor', productId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
        data: {
          value: color,
        }
      };
      return $http(req);
    }

    function removeColor(productId, colorId) {
       var endpoint = EndpointService.get('removeProductColor', productId, colorId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
      };
      return $http(req);
    }

    function updateSizes(productId, size, value) {
      var endpoint = EndpointService.get('updateProductSizes', productId);
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
        data: {},
      };
      req.data[size] = value;
      return $http(req);
    }
  }
})();
