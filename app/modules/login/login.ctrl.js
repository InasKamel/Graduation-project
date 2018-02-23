(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$rootScope', '$auth', '$state'];
  function LoginController($rootScope, $auth, $state) {
    var vm = this;
    vm.credentials = {
      username: '',
      password: '',
    };
    vm.message = '';
    vm.loading = false;
    vm.login = login;

    function login() {
      vm.loading = true;
      $auth.login(vm.credentials)
      .then(function(res) {
        $state.go($rootScope.homepage);
      })
      .catch(function(err) {
        vm.loading = false;
        vm.message = err.data.message;
      });
    }
  }
})();
