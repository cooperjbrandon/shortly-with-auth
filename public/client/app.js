angular.module('shortlyApp', [
  'ngRoute'
]) // ^--setter
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'templates/main.html'
    })
    .when('/shorten', {
      controller: 'ShortenController',
      templateUrl: 'templates/shorten.html'
    })
    .otherwise({
      redirectTo: '/'
    });
})
// angular.module('shortlyApp') <-- getter
.controller('MainController', function ($scope) /*<--,[$services]*/ {
  $scope.name = 'Eric';
});