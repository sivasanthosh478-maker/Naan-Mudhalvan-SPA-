angular.module('spaApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .when('/profile/:id', {
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'EditCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);