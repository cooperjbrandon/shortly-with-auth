angular.module('shortlyApp')
.controller('MainController', function ($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://localhost:4567/links' //or url: /links
  })
  /* .success(function (data) {
    $scope.links = data
  }) OR: */
  .then(function (data) {
    console.log(data);
    $scope.links = data.data;
  });
})
.controller('ShortenController', function ($scope, $http) {
  $scope.name = 'Eric';
  $scope.createLink = function () {
    $http({
      method: 'POST',
      url: 'http://localhost:4567/links', //or url: /links
      data: $scope.newLink
    });
  };
  $scope.newLink = {
    url: ''
  };
});