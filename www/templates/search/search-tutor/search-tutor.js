/**
 * Created by DangThanhLinh on 01/04/2017.
 */
angular.module('app')
  .controller('SearchTutorCtrl', function ($scope,$stateParams, SearchTutorService) {
    $scope.resultPosts = [];
    $scope.input = [];
    $scope.distances = [
      {name: "5KM", value: 5000},
      {name: "10KM", value: 10000},
      {name: "15KM", value: 15000},
      {name: "20KM", value: 20000}
    ];
    $scope.searchTutor = function () {
      $scope.data = {
        location: $scope.input.location
      };
      console.log('Location', $scope.data.location);
      console.log('Distance', $scope.input.distance);
      SearchTutorService.searchTutorWithDistance($scope.data, $scope.input.distance)
        .then(
          function (response) {
            $scope.resultPosts = response;
            console.log($scope.resultPosts)
          },
          function (error, data) {
            console.log("resquest error")
          })
    };
  });