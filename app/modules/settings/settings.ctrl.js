(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['ShopService'];
    function SettingsController(ShopService) {
        var vm = this;
        vm.shop = undefined;
        vm.feildInEdit = undefined;
        vm.isLoading = false;

        vm.updateShopInfo = updateShopInfo;

        init();

        function init() {
            ShopService
                .getShopInfo()
                .then(function(res) {
                    vm.shop = res.data;
                })
                .catch(function(err) {
                    // @TODO: handle error
                });
        }

        function updateShopInfo(attribute, newValue) {
            vm.isLoading = true;
            ShopService
                .updateShopInfo(attribute, newValue)
                .then(function(res) {
                    vm.shop[attribute] = newValue;
                    vm.feildInEdit = undefined;
                    vm.isLoading = false;
                })
                .catch(function(err) {
                    //   @TODO: handle he error
                });
        }
    }
})();
