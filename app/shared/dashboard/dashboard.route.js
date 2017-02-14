(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(routes);

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                templateUrl: 'shared/dashboard/dashboard.html',
                controller: 'DashboardController as ctrl',
                data: {
                    protected: true
                }
            });
    }
})();