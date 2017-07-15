(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('StatisticsController', StatisticsController);

  StatisticsController.$inject = ['$rootScope', '$timeout', 'ShopService'];
  function StatisticsController($rootScope, $timeout, ShopService) {
    var vm = this;
    vm.statisticsTab = 'views';
    vm.statistics = {};
    init();

    function init () {
      $timeout(function () {
        ShopService
        .getGeneralStatistics()
        .then(function (res) {
          vm.productStatistics = res.data;
          ['views', 'likes'].forEach(function (x) {
            vm.statistics[x] = {
              count: res.data[x].count,
              gender: {
                labels: ((res.data[x].count) ? getObjectVals(res.data[x].genders, 'keys') : ['0']),
                data: ((res.data[x].count) ? getObjectVals(res.data[x].genders, 'values') : ['1'])
              },
              ageRanges: {
                labels: ((res.data[x].count) ? getObjectVals(res.data[x].ageRanges, 'keys') : ['0']),
                data: ((res.data[x].count) ? getObjectVals(res.data[x].ageRanges, 'values') : ['1'])
              },
              events: {
                labels: ((res.data[x].count) ? getObjectVals(res.data[x].events, 'keys') : ['0']),
                data: ((res.data[x].count) ? getObjectVals(res.data[x].events, 'values') : ['0'])
              }
            };
          });
          $rootScope.showContent = true;
          $rootScope.loading = false;
        })
        .catch(function () {

        });
      }, 500);
    }

    function getObjectVals(obj, select) {
      var ret = [];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if(select === 'keys') {
            ret.push(key);
          } else if(select === 'values') {
            ret.push(obj[key]);
          }
        }
      }
      return ret;
    }
  }
})();
