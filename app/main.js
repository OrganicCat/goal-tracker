app = angular.module('goal-tracker', ['firebase']);

app.controller('goalController', ['$scope', '$firebase', function($scope, $firebase) {
  $scope.goals = [];
  $scope.goalForm = {};

  var ref = new Firebase("https://goal-tracker.firebaseio.com/");
  var testbase = $firebase(ref);
  var syncObject = testbase.$asObject();

  ref.authWithPassword({
    email    : "", // fill in your email
    password : "" // fill in your password
  }, function(error, authData) { /* check your data here */ }, {
    remember: "sessionOnly"
  });

  ref.on("value", function(snapshot) {
    $scope.goals = snapshot.val().goals;
    $scope.effortLevels = snapshot.val().effortLevels;
  }, function (errorObject) {
    console.log("What the shit Lana?: " + errorObject);
  });

  $scope.addGoal = function() {
    $scope.goalForm.finished = false;
    $scope.goals.push($scope.goalForm);
    ref.update({goals:angular.fromJson(angular.toJson($scope.goals))});
    $scope.goalForm = {};
    
  };

  $scope.removeGoal = function() {
    var index = $scope.goals.indexOf(this.goal);
    $scope.goals.splice(index, 1);
    ref.update({goals:angular.fromJson(angular.toJson($scope.goals))});
  };

  $scope.finishGoal = function() {
    console.log(!this.goal.finished);
    this.goal.finished = !this.goal.finished;
    ref.update({goals:angular.fromJson(angular.toJson($scope.goals))});
  };


}]);