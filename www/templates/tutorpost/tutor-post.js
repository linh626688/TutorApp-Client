/**
 * Created by DangThanhLinh on 07/03/2017.
 */
angular.module('app')
  .controller('TutorPostCtrl', function ($scope, $state, $stateParams, tutorPostService, $localStorage) {
    $scope.postDetail = [];
    $scope.user = $localStorage.user;
    if ($scope.user != null) {
      $scope.tokenTutor = $localStorage.user.data.token;
    }

    tutorPostService.getPostTutor($stateParams.postId)
      .success(function (response) {
        $scope.postDetail = response;
        console.log(response);
      });
    console.log($stateParams.postId);

    $scope.editPost = function () {
      $state.go('app.edit-tutor-post', {postId: $stateParams.postId}, {reload: true});
    };
    $scope.deletePost = function () {
      $state.go('app.tutor-posts', {reload: true});
      tutorPostService.deletePostTutor($scope.tokenTutor, $stateParams.postId)
        .then(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error)
          }
        );
    };
    $scope.tocreateMessage = function () {
      $state.go('app.create-message', {postId: $stateParams.postId});
    }
  })
;
