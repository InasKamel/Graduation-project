(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['DashboardService', 'SettingsService'];
    function SettingsController(DashboardService, SettingsService) {
        var vm = this;
        vm.shop = undefined;
        vm.feildInEdit = undefined;
        vm.isLoading = false;

        vm.editSettings = editSettings;

        init();

        function init() {
            DashboardService
                .getShopInfo()
                .then(function(res) {
                    vm.shop = res.data;
                })
                .catch(function(err) {
                    // @TODO: handle error
                });
        }

        function editSettings(attribute, newValue) {
            vm.isLoading = true;
            SettingsService
                .editSettings(attribute, newValue)
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
