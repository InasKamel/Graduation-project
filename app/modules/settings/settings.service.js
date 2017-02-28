(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('SettingsService', SettingsService);

    SettingsService.$inject = ['$http', '$q'];
    function SettingsService($http, $q) {
        var methods = {
            editSettings: editSettings,
        };
        return methods;

        function editSettings(attribute, newValue) {
            var endpointURL = 'https://octana.herokuapp.com/api/v1/fe/settings';
            var req = {
                method: 'PATCH',
                url: endpointURL,
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
