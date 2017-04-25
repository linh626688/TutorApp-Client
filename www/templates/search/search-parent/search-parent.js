/**
 * Created by DangThanhLinh on 01/04/2017.
 */
angular.module('app')
  .controller('SearchParentCtrl', function ($scope, SearchParentService, $cordovaGeolocation, MotionService) {
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
    $scope.map = {
      center: {
        latitude: 21.0330205,
        longitude: 105.8049613
      },
      zoom: 14,
      options: {
        scrollwheel: false
      }
    };
    $scope.markers = [];
    // get position of user and then set the center of the map to that position
    $cordovaGeolocation
      .getCurrentPosition()
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
          options: {draggable: true},

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
        console.log(typeof $scope.coor);
        google.maps.event.addDomListener(window, 'load', function () {
          var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          var map = new google.maps.Map(document.getElementById("map"), mapOptions);

          navigator.geolocation.getCurrentPosition(function (pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
              position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
              map: map,
              title: "My Location"
            });
          });

          $scope.map = map;
        });
      }, function (err) {
        // error
      });
    $scope.searchCurrentLocation = function () {
      SearchParentService.searchTutorWithCurrentLocation($scope.coor, $scope.input.distance)
        .then(
          function (response) {
            $scope.resultPosts = response;
            console.log(response);
            MotionService.ripple();
          },
          function (error, data) {
            console.log("resquest error")
          })
    }

  });
