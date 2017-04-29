(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$auth', '$state', 'ShopService'];
    function DashboardController($auth, $state, ShopService) {
        var vm = this;
        vm.logout = logout;
        vm.shopInfo = undefined;
        vm.categories = [];

        init();

        function init() {
            ShopService
                .getShopInfo()
                .then(function(res) {
                    vm.shopInfo = {};
                    vm.shopInfo.name = res.data.name;
                    vm.shopInfo.slogan = res.data.slogan;
                    vm.shopInfo.logo = res.data.logo;
                    vm.categories = res.data.categories;
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
