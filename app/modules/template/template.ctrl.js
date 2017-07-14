(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('TemplateController', TemplateController);

  TemplateController.$inject = ['$rootScope', 'TemplateService'];
  function TemplateController($rootScope, TemplateService) {
    var vm = this;
    vm.sayHello = sayHello;
    vm.testService = testService;
    $rootScope.loading = false;

    testService();

    function sayHello() {
      return 'Welcome !';
    }

    function testService() {
      TemplateService
        .callBackend()
        .then(function(res) {
          // console.log(res.data);
        })
        .catch(function(err) {
          // console.log(err);
        });
    }
  }
})();
