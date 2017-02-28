
/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.cheeses = [{task: "Hi World", complete: false}, {task: "Shave Chin", complete: false}, {task: "Delete Brower History", complete: true}, {task: "Breathe", complete: false}, 
    ];

    $scope.trash = [];

    $scope.counter = function() {
      var count = 0;
      for (var i = 0; i < $scope.cheeses.length; i++) {
        if ($scope.cheeses[i].complete === false) {
          count++;
        }
      }
      return count;
    };
    
    $scope.addThing = function(newthing) {
      if ($scope.newTask !== undefined) {
        $scope.cheeses.push({task: newthing, complete: null});
        $scope.newTask = null;
      }
    };

    $scope.removeThing = function(index) {
      $scope.cheeses.splice(index, 1);
    };

    $scope.complete = function(task) {
      task.complete = !task.complete;
    };

    $scope.clean = function() {
      for (var i = 0; i < $scope.cheeses.length; i++) {
        if ($scope.cheeses[i].complete) {
          $scope.cheeses.splice(i, 1);
        }
      }
    };

    window.$scope = $scope;
  });

}());

