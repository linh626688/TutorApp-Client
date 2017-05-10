/**
 * Created by DangThanhLinh on 01/04/2017.
 */
angular.module('app')
  .controller('SearchParentCtrl', function ($scope, $timeout, $ionicLoading, SearchParentService, tutorPostService, $cordovaGeolocation, MotionService) {
    $scope.resultPosts = [];
    $scope.input = [];
    var allPostTutorGPS = [];
    var listResponse = [];
    var listMarker = [];

    tutorPostService.getAllPostTutors()
      .then(function (response) {
        listResponse = response.data;
        console.log(listResponse);
        $scope.adddata();
      });

    $scope.adddata = function () {

      for (var i = 0; i < listResponse.length; i++) {
        allPostTutorGPS.push({
          id: listResponse[i].id,
          lat: listResponse[i].lat,
          lng: listResponse[i].lng
        });
      }
      console.log(allPostTutorGPS);
      for (var j = 0; j < allPostTutorGPS.length; j++) {
        var markerTutor = {
          id: allPostTutorGPS[j].id,
          coords: {
            latitude: allPostTutorGPS[j].lat,
            longitude: allPostTutorGPS[j].lng
          },
          options: {
            draggable: false,
            icon: 'img/teacher_male.png'
          }
        };
        listMarker.push(markerTutor);
      }
      console.log(listMarker);
    };


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
            $scope.loading();
            $scope.resultPosts = response;
            console.log($scope.resultPosts)
          },
          function (error, data) {
            console.log("resquest error")
          })
    };

    $scope.map = {
      zoom: 14,
      bounds: {},
      center: {latitude: 21.0330205, longitude: 105.8049613},
      markers: listMarker
    };

    // get position of user and then set the center of the map to that position
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        $scope.map = {center: {latitude: lat, longitude: long}, zoom: 16};
        $scope.marker = {
          id: 0,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          options: {draggable: false},

          events: {
            dragend: function (marker, eventName, args) {
              var lat = marker.getPosition().lat();
              var lon = marker.getPosition().lng();

              $scope.marker.options = {
                draggable: true,
                labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                labelAnchor: "100 0",
                labelClass: "marker-labels"
              };
            }
          }
        };
      });

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.lat = position.coords.latitude;
        $scope.coor.lat = parseFloat(position.coords.latitude);
        $scope.long = position.coords.longitude;
        $scope.coor.lng = parseFloat(position.coords.longitude);
        console.log($scope.lat + ' ' + $scope.long);
      }, function (err) {
        // error
      });

    $scope.searchCurrentLocation = function () {
      SearchParentService.searchTutorWithCurrentLocation($scope.coor, $scope.input.distance)
        .then(
          function (response) {
            $scope.loading();
            $scope.resultPosts = response;
            console.log($scope.coor);
            MotionService.ripple();
          },
          function (error, data) {
            console.log("resquest error")
          })
    };
    $scope.loading = function () {
      $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
      });

      // For example's sake, hide the sheet after two seconds
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    };

    $scope.showPopup = function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Xin chào tới TUTOR APP'
      });

      $timeout(function () {
        //ionic.material.ink.displayEffect();
        ionicMaterialInk.displayEffect();
      }, 0);
    };
  });
