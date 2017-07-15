(function () {
  'use strict';

  angular
    .module('dashboard')
    .factory('EndpointService', EndpointService);

  EndpointService.$inject = [];
  function EndpointService() {
    var methods = {
      get: get,
    };

    var baseURL = 'http://localhost:3000/api/v1/web';
    var endpoints = {
      getTemplates: function() {
        return { method: 'GET', url: 'http://localhost:3000/api/v1/templates' };
      },
      login: function() {
        return { method: 'GET', url: baseURL + '/login' };
      },
      getShopInfo: function() {
        return { method: 'GET', url: baseURL + '/shop-info' };
      },
      updateShopInfo: function() {
        return { method: 'PATCH', url: baseURL + '/shop-info' };
      },
      getProducts: function(categoryId, limit, page) {
        var query = '';
        if(arguments.length) {
          query += '?';
        }
        if(categoryId) {
          query += (query.length > 1 ? '&' : '') + ('categoryId=' + categoryId);
        }
        if(limit) {
          query += (query.length > 1 ? '&' : '') + ('limit=' + limit);
        }
        if(page) {
          query += (query.length > 1 ? '&' : '') + ('page=' + page);
        }
        return {
          method: 'GET',
          url: baseURL + '/products' + query,
        };
      },
      getProduct: function(productId) {
        return { method: 'GET', url: baseURL + '/products/' + productId };
      },
      createProduct: function() {
        return { method: 'POST', url: baseURL + '/products' };
      },
      updateProduct: function(productId) {
        return { method: 'PATCH', url: baseURL + '/products/' + productId };
      },
      removeProduct: function(productId) {
        return { method: 'DELETE', url: baseURL + '/products/' + productId };
      },
      getProductStatistics: function(productId) {
        return { method: 'GET', url: baseURL + '/products/' + productId + '/statistics' };
      },
      getGeneralStatistics: function() {
        return { method: 'GET', url: baseURL + '/statistics' };
      },
      addProductImages: function(productId) {
        return { method: 'POST', url: baseURL + '/products/' + productId + '/images' };
      },
      removeProductImage: function(productId, imageId) {
        return { method: 'DELETE', url: baseURL + '/products/' + productId + '/images/' + imageId };
      },
      addProductColor: function(productId) {
        return { method: 'POST', url: baseURL + '/products/' + productId + '/colors' };
      },
      removeProductColor: function(productId, colorId) {
        return { method: 'DELETE', url: baseURL + '/products/' + productId + '/colors/' + colorId };
      },
      updateProductSizes: function(productId) {
        return { method: 'PATCH', url: baseURL + '/products/' + productId + '/sizes' };
      },
    };

    function get(name) {
      if(!endpoints[name]) {
        return {};
      }
      var args = Array.prototype.slice.call(arguments);
      var f = endpoints[name];
      return f.apply(f, args.splice(1));
    }

    return methods;
  }
})();
