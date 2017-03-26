/**
 * Created by DangThanhLinh on 07/03/2017.
 */
angular.module('app')
  .controller('TutorPostCtrl', function ($scope, $stateParams, tutorPostService) {
    $scope.postDetail = [];
    tutorPostService.getPostTutor($stateParams.postId)
      .success(function (response) {
        $scope.postDetail = response;
      })
    console.log($stateParams.postId)
  });
