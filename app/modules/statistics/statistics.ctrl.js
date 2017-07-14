(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('StatisticsController', StatisticsController);

  StatisticsController.$inject = ['$rootScope', 'TemplateService'];
  function StatisticsController($rootScope, TemplateService) {
    var vm = this;

    $rootScope.loading = false;
  }
})();
