(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(routes);

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('dashboard.list-products', {
                url: '/list-products',
                templateUrl: 'modules/list-products/list-products.html',
                controller: 'ListProductsController as ctrl',
                data: {}
            });
    }
})();