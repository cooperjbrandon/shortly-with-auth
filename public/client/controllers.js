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
    // if we understood server, this is what we would do for last visited
    // for (var i = 0; i < $scope.links.length; i++) {
    //   $scope.links[i].recentClicks = 0;
    // }
  });
  $scope.searchText = '';
  $scope.predicate = '-created_at';

  // if we understood server, this is what we would do for last visited
  // $scope.totalClicks = 0;
  // $scope.updateRecent = function(link) {
  //   $scope.totalClicks++;
  //   link.recentClicks = $scope.totalClicks;
  // };
})
.controller('ShortenController', function ($scope, $http) {
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