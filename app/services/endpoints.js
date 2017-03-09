(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('endpointURLService', endpointURLService);

        function endpointURLService() {
            var endpoints = {
                'ListProducts': {url: ['https://octana.herokuapp.com/api/v1/fe/categories/'], method: ['POST', 'GET']},
                'Product': {url: ['https://octana.herokuapp.com/api/v1/fe/products/'], method: ['GET', 'PATCH']},
                'UpdateSizes': {url: ['https://octana.herokuapp.com/api/v1/fe/products/', '', '/sizes'], method: 'PATCH'},
                'Color': {url: ['https://octana.herokuapp.com/api/v1/fe/products/', '', '/colors'], method: ['DELETE', 'POST']},
                'Settings': {url: 'https://octana.herokuapp.com/api/v1/fe/settings', method: 'PATCH'},
                'ShopInfo': {url: 'https://octana.herokuapp.com/api/v1/fe/shop_info', method: 'GET'},
                'Categories': {url: 'https://octana.herokuapp.com/api/v1/fe/categories', method: 'GET'}
            };

            return endpoints;
        }
})();