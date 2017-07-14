(function () {
  'use strict';

  angular
    .module('dashboard', [
      'satellizer',
      'ui.router',
      'ngMessages',
      'color.picker',
      'ngScrollbars',
    ])
    .run(appRun);

  appRun.$inject = ['$rootScope', '$auth', '$state', '$location'];
  function appRun($rootScope, $auth, $state, $location) {
    $rootScope.homepage = 'dashboard.statistics';
    $rootScope.logout = logout;
    $rootScope.$on('$stateChangeStart', onStateChange);

    function onStateChange(e, toState, toParams, fromState) {
      $rootScope.loading = true;
      $rootScope.showContent = false;

      var isProtected = toState.data && toState.data.protected;
      if(isProtected && !$auth.isAuthenticated()) {
        e.preventDefault();
        $state.go('login');
      } else if(toState.name === 'login' && $auth.isAuthenticated()) {
        e.preventDefault();
        $state.go($rootScope.homepage);
      }
    }

    function logout() {
      if(confirm('Are you sure you want to logout ?')) {
        $auth.logout();
        window.location = '/';
      }
    }
  }
})();
