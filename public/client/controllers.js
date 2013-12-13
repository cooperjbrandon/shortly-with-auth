angular.module('shortlyApp')
.controller('MainController', function ($scope, $http) {
  $http({
    method: 'GET',
    url: '/links'
  })
  /* .success(function (data) {
    $scope.links = data
  }) OR: */
  .then(function (data) {
    console.log(data);
    $scope.links = data.data;
  })
})
.controller('ShortenController', function ($scope) {
  $scope.name = 'Eric';
})