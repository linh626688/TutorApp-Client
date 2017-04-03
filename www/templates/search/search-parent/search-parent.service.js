/**
 * Created by DangThanhLinh on 01/04/2017.
 */
angular.module('app')
  .factory('SearchParentService', function ($http) {
    return {
      searchTutorWithDistance: searchTutorWithDistance
    };
    function searchTutorWithDistance(locaion, distance) {
      return $http({
        url: 'http://35.185.156.51:8080/parent/findTutorNoLatLong?distance='+distance,
        method: 'POST',
        data: locaion,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  });
