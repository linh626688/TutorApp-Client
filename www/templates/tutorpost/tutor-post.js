/**
 * Created by DangThanhLinh on 07/03/2017.
 */
angular.module('app')
  .controller('TutorPostCtrl', function ($scope, $stateParams, TutorPost) {
    angular.forEach(TutorPost, function (post) {
      if (post.id === $stateParams.postId) {
        $scope.postDetail = post;
      }
    });
    console.log($stateParams.postId)
  });
