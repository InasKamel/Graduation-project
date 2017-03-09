(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('SettingsService', SettingsService);

    SettingsService.$inject = ['$http', '$q', 'endpointURLService'];
    function SettingsService($http, $q, endpointURLService) {
        var methods = {
            editSettings: editSettings,
        };
        return methods;

        function editSettings(attribute, newValue) {
            var endpoint = {
                url: endpointURLService.Settings.url,
                method: endpointURLService.Settings.method
            };
            var req = {
                url: endpoint.url,
                method: endpoint.method,
                headers: {},
                data: {},
            };

            req.data[attribute] = newValue;

            return $http(req)
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return $q.reject(err);
                });
        }
    }
})();
