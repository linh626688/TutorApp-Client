/**
 * Created by DangThanhLinh on 04/03/2017.
 */
angular.module('app')
  .controller('ParentPostCtrl', function ($scope,$stateParams,parentPostService) {
    $scope.postDetail =[];
    parentPostService.getPostParent($stateParams.postId)
      .success(function (response) {
        $scope.postDetail = response;
        console.log(response)
      })
  });
