(function() {
  'use strict';

  angular
    .module("MyApp", []);

  angular
    .module("MyApp")
    .controller("MyCtrl", function($scope) {
      $scope.name = "Peter";
      $scope.user = {
        name: "Parker"
      };
    });

  angular
    .module("MyApp")
    .controller("MyNestedCtrl", function($scope) {
    }); 
    
})();
