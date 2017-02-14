(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(appConfiguration);
    
    appConfiguration.$inject = ['$authProvider', '$urlRouterProvider'];
    function appConfiguration($authProvider, $urlRouterProvider) {
        // Satellizer
        $authProvider.loginUrl = 'https://octana.herokuapp.com/api/v1/fe/login';
        $authProvider.tokenName = 'access_token';
        $authProvider.tokenHeader = 'X-Access-Token';
        $authProvider.tokenPrefix = '';

        $urlRouterProvider.when('', '/template');    // Home page
    }
})();