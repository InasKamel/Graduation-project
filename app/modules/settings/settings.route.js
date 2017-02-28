(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(routes);

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('dashboard.settings', {
                url: '/settings',
                templateUrl: 'modules/settings/settings.html',
                controller: 'SettingsController as ctrl',
                data: {}
            });
    }
})();
