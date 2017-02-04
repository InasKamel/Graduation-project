(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(appConfiguration);
    
    appConfiguration.$inject = ['$urlRouterProvider'];
    function appConfiguration($urlRouterProvider) {
        $urlRouterProvider
            .when('', '/template');    // Home page
        
    }
})();