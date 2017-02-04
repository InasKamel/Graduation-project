(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('TemplateService', TemplateService);

    TemplateService.$inject = ['$http', '$q'];
    function TemplateService($http, $q) {
        var methods = {
            callBackend: callBackend,
        };
        return methods;

        function callBackend(payload) {
            var endpointURL = 'https://gp-test-app.herokuapp.com/api';
            var req = {
                method: 'GET',
                url: endpointURL,
                headers: {
                    // 'Authorization': $auth.getToken()
                },
                data: payload
            };

            return $http(req)
                .then(success)
                .catch(failure);
            
            function success(res) {
                return res;
            }

            function failure(err) {
                return $q.reject(err);
            }
        }
    }
})();