angular.module('app')
  .controller('ParentsCtrl', function ($scope, $http) {
    $scope.parents = [];
    $scope.getAllParent = function () {
      $http.get('http://35.185.156.51:8080/getAllParent')
        .success(function (response) {
          $scope.parents = response;
          console.log(response)
        })
    }()
  });
