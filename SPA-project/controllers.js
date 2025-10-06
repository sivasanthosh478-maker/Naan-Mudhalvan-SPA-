angular.module('spaApp')
.controller('DashboardCtrl', ['$scope','UserService', function($scope, UserService){
  $scope.loading = true;
  UserService.getUsers().then(function(data){
    $scope.users = data;
    $scope.loading = false;
  }, function(){ $scope.error = true; });
}])
.controller('ProfileCtrl', ['$scope','$routeParams','UserService', 
  function($scope,$routeParams,UserService){
    $scope.loading = true;
    var id = parseInt($routeParams.id);
    UserService.getUserById(id).then(function(u){
      $scope.user = u;
      $scope.loading = false;
    }, function(err){
      $scope.error = err;
      $scope.loading = false;
    });
}])
.controller('EditCtrl', ['$scope','$routeParams','$location','UserService', function($scope,$routeParams,$location,UserService){
  $scope.loading = true;
  var id = parseInt($routeParams.id);
  UserService.getUserById(id).then(function(u){
    $scope.user = angular.copy(u);
    $scope.loading = false;
  });

  $scope.save = function(){
    UserService.updateUser($scope.user).then(function(){
      alert('Saved successfully');
      $location.path('/');
    }, function(err){
      alert('Save failed: ' + err);
    });
  };
}]);