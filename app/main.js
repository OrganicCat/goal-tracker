app = angular.module('goal-tracker', []);

app.controller('goalController', ['$scope', function($scope) {
  $scope.goals = [];
  $scope.goalForm = {};
  $scope.goals.push({
    name: "Grow Cats",
    description: "I am growing some cats",
    difficulty: "Pirate",
    estimate: "3 days"
  });

  $scope.addGoal = function() {
    $scope.goals.push($scope.goalForm);
    $scope.goalForm = {};
  };

}]);