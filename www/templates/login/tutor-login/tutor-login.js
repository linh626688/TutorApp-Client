/**
 * Created by DangThanhLinh on 15/03/2017.
 */
angular.module('app')
  .controller('TutorUpdateCtrl', function ($scope, $localStorage, OauthService, $state) {
    $scope.tutorDetail = $localStorage.user;
    console.log($scope.tutorDetail);
    var token = $localStorage.user.data.token;
    var idTutor = $localStorage.user.data.tutor.id;
    console.log(token);
    console.log(idTutor);
    $scope.input = [];
    $scope.updateTutor = function () {
      var data = {
        name: $scope.input.name,
        birth: $scope.input.birth,
        currentJob: $scope.input.job,
        location: $scope.input.area
      };
      console.log(data);
      OauthService.updateTutor(token, data, idTutor)
        .then(
          function (response) {
            console.log(response);
            $state.go('app.tutor', {tutorId: idTutor})
          },
          function (error) {
            console.log(error);
          })
    }
  });
