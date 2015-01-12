app = angular.module('goal-tracker', []);

app.controller('goalController', ['$scope', function($scope) {
  $scope.goals = [];
  $scope.goalForm = {};
  $scope.goals.push({
    name: "Grow Cats",
    description: "I am growing some cats",
    difficulty: "Pirate",
    estimate: "3 days",
    finished: false
  });

  $scope.addGoal = function() {
    $scope.goalForm.finished = false;
    $scope.goals.push($scope.goalForm);
    $scope.goalForm = {};
  };

  $scope.removeGoal = function() {
    var index = $scope.goals.indexOf(this.goal);
    $scope.goals.splice(index, 1);
  };

  $scope.finishGoal = function() {
    this.goal.finished = true;
  };

}]);