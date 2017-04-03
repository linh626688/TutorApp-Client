/**
 * Created by DangThanhLinh on 21/03/2017.
 */
angular.module('app')
  .controller('ParentPostsCtrl', function ($scope, $http, parentPostService) {
    $scope.postParents = [];
    parentPostService.getAllPostParents()
      .success(function (response) {
        $scope.postParents = response;
        console.log(response)
      })
  });
