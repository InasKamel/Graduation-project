(function () {
    'use strict';

    angular
        .module('dashboard', [
            'ui.router'
        ])
        .run(appRun);
    
    appRun.$inject = ['$rootScope'];
    function appRun($rootScope) {
        $rootScope.$on('$stateChangeStart', onStateChange);
        function onStateChange(e, toState, toParams, fromState) {
            
        }
    }
})();
