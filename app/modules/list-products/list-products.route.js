(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(routes);

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/list-products.html',
                controller: 'ListController as ctrl',
                data: {
                    portected: true
                }
            });
    }
})();
/*
var obj = angular.module('myApp',["ngMessages"]); // brackets for the dependinces
obj.controller('listController',['$http','$log','$scope','$timeout',function($http,$log,$scope,$timeout){






// http request using the endpoint
$http({
      method: 'GET',
      url: ''
   }).then(function (response){

       // alter this line according to the response parameters ;)
        $scope.products = response.data.results;
        $log.info(response.data.results);
        

   },function (error){

   });


   }]);
    

*/