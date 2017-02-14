(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$auth', '$state', 'DashboardService'];
    function DashboardController($auth, $state, DashboardService) {
        var vm = this;
        vm.logout = logout;
        vm.shopInfo = {
            name: '',
            slogan: '',
            logo: '',
        };

        init();
        
        function init() {
            DashboardService
                .getShopInfo()
                .then(function(res) {
                    vm.shopInfo.name = res.data.name;
                    vm.shopInfo.slogan = res.data.slogan;
                    vm.shopInfo.logo = res.data.logo; 
                })
                .catch(function(err) {
                    // @TODO: handle error
                });
        }
        
        function logout() {
            $auth.logout();
            $state.go('login');
        }
    }
})();