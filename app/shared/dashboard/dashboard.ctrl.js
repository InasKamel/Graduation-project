(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$auth', '$state'];
    function DashboardController($auth, $state) {
        var vm = this;
        vm.logout = logout;

        function logout() {
            $auth.logout();
            $state.go('login');
        }
    }
})();