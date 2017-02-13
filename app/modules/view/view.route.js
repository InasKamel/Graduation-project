(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(routes);

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('view', {
                url: '/view',
                templateUrl: 'modules/view/view.html',
                controller: 'View as ctrl',
                data: {
                    portected: true
                }
            });
    }
})();