/**
 * Created by DangThanhLinh on 01/04/2017.
 */
angular.module('app')
  .controller('SearchParentCtrl', function ($scope, SearchParentService, $cordovaGeolocation) {
    $scope.resultPosts = [];
    $scope.input = [];
    $scope.input.distance = 10000;
    $scope.coor = {
      lat: '',
      lng: ''
    };
    $scope.distances = [
      {name: "5KM", value: 5000},
      {name: "10KM", value: 10000},
      {name: "15KM", value: 15000},
      {name: "20KM", value: 20000}
    ];
    $scope.searchParent = function () {
      $scope.data = {
        location: $scope.input.location
      };
      console.log('Location', $scope.data.location);
      console.log('Distance', $scope.input.distance);
      SearchParentService.searchTutorWithDistance($scope.data, $scope.input.distance)
        .then(
          function (response) {
            $scope.resultPosts = response;
            console.log($scope.resultPosts)
          },
          function (error, data) {
            console.log("resquest error")
          })
    };
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.lat = position.coords.latitude;
        $scope.coor.lat = parseFloat(position.coords.latitude);
        $scope.long = position.coords.longitude;
        $scope.coor.lng = parseFloat(position.coords.longitude);
        console.log(typeof $scope.coor)

      }, function (err) {
        // error
      });
    $scope.searchCurrentLocation = function () {
      SearchParentService.searchTutorWithCurrentLocation($scope.coor, $scope.input.distance)
        .then(
          function (response) {
            $scope.resultPosts = response;
            console.log(response)
          },
          function (error, data) {
            console.log("resquest error")
          })
    }
  });
