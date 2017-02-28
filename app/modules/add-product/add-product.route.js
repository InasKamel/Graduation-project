(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(routes);

        routes.$inject = ['$stateProvider'];

        function routes($stateProvider) {
            $stateProvider
                .state('dashboard.add-product', {
                    url: '/list-products/:id/new',
                    templateUrl: 'modules/add-product/add-product.html',
                    controller: 'AddProductController as ctrl'
                });
        }
})();
