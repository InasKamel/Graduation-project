(function () {
    'use strict';

    angular
        .module('dashboard', [
            'satellizer',
            'ui.router',
        ])
        .run(appRun);

    appRun.$inject = ['$rootScope', '$auth', '$state', '$location'];
    function appRun($rootScope, $auth, $state, $location) {
        $rootScope.homepage = 'dashboard.template';
        $rootScope.$on('$stateChangeStart', onStateChange);

        function onStateChange(e, toState, toParams, fromState) {
            var isProtected = toState.data && toState.data.protected;
            if(isProtected && !$auth.isAuthenticated()) {
                e.preventDefault();
                $state.go('login');
            } else if(toState.name === 'login' && $auth.isAuthenticated()) {
                e.preventDefault();
                $state.go($rootScope.homepage);
            }
        }
    }
})();
