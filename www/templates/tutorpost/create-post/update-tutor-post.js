/**
 * Created by DangThanhLinh on 15/03/2017.
 */
angular.module('app')
  .controller('updateTutorPost', function ($scope, TutorPost) {
      $scope.tutorpost = TutorPost;

      $scope.postDetail = {};
      $scope.savepost = function (contact) {

        console.log($scope.postDetail);
        $scope.tutorpost.push($scope.postDetail);

      }
    }
  )
