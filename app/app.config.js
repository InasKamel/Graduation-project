(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(appConfiguration);

    appConfiguration.$inject = ['$authProvider', '$urlRouterProvider'];
    function appConfiguration($authProvider, $urlRouterProvider) {
        // Satellizer
        $authProvider.loginUrl = 'https://octana.herokuapp.com/api/v1/web/login';
        $authProvider.tokenName = 'accessToken';
        $authProvider.tokenHeader = 'X-Access-Token';
        $authProvider.tokenPrefix = '';
        $authProvider.tokenType = '';

        $urlRouterProvider.when('', '/template');    // Home page
    }
})();
