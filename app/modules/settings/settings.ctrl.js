(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['$rootScope', '$timeout', 'ShopService'];
  function SettingsController($rootScope, $timeout, ShopService) {
    var vm = this;
    vm.shop = undefined;
    vm.feildInEdit = undefined;

    vm.updateShopInfo = updateShopInfo;

    init();

    function init() {
      $timeout(function () {
        ShopService
        .getShopInfo()
        .then(function(res) {
          vm.shop = res.data;
          $rootScope.showContent = true;
          $rootScope.loading = false;
        })
        .catch(function(err) {
          // @TODO: handle error
        });
      }, 500);
    }

    function updateShopInfo(attribute, newValue) {
      $rootScope.loading = true;
      $timeout(function () {
        ShopService
        .updateShopInfo(attribute, newValue)
        .then(function(res) {
          vm.shop[attribute] = newValue;
          vm.feildInEdit = undefined;
          $rootScope.loading = false;
        })
        .catch(function(err) {
          //   @TODO: handle he error
        });
      }, 500);
    }
  }
})();
