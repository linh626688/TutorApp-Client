/**
 * Created by DangThanhLinh on 25/04/2017.
 */
angular.module('app')
  .controller('EditTutorPostCtrl', function ($scope, $state, $stateParams, tutorPostService, $localStorage) {
    $scope.postDetail = [];
    $scope.edit = [];
    $scope.tokenTutor = $localStorage.user.data.token;
    tutorPostService.getPostTutor($stateParams.postId)
      .success(function (response) {
        $scope.postDetail = response;
        console.log(response);
      });
    $scope.editPostTutor = function () {
      var request = {
        subject: $scope.edit.subject,
        times: $scope.edit.times,
        salaryDesired: $scope.edit.salaryDesired,
        locationDesired: $scope.edit.locationDesired,
        about: $scope.edit.about,
        classLevel: $scope.edit.classLevel
      };
      console.log(request);
      tutorPostService.editPostTutor(request, $scope.tokenTutor, $stateParams.postId)
        .then(
          function (response) {
            $scope.post = response.data;
            console.log(response);
            $state.go('app.tutor-post-image', {"postId": $scope.post.id});
          },
          function (error) {
            console.log(error);
          }
        )
    }
  })

;
