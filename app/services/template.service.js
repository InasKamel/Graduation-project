(function () {
  'use strict';

  angular
    .module('dashboard')
    .factory('TemplateService', TemplateService);

  TemplateService.$inject = ['$http', 'EndpointService'];
  function TemplateService($http, EndpointService) {
    var methods = {
      callBackend: callBackend,
    };
    return methods;

    function callBackend(payload) {
      var endpoint = EndpointService.get('getTemplates');
      var req = {
        method: endpoint.method,
        url: endpoint.url,
        headers: {},
        data: payload,
      };

      return $http(req);
    }
  }
})();
