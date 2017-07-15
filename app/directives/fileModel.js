(function () {
  'use strict';

  angular
    .module('dashboard')
    .directive('fileModel', fileModel)
    .directive('filesModel', filesModel);

  fileModel.$inject = ['$parse'];
  function fileModel($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function() {
          scope.$apply(function() {
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }

  filesModel.$inject = ['$parse'];
  function filesModel($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.filesModel);
        var modelSetter = model.assign;

        element.bind('change', function() {
          scope.$apply(function() {
            modelSetter(scope, element[0].files);
          });
        });
      }
    };
  }
})();
