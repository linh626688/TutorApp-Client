/**
 * Created by DangThanhLinh on 08/03/2017.
 */
angular.module("app")
  .controller('RegisterCtrl', function ($scope, $state, OauthService) {
    $scope.input = [];
    $scope.roles = [
      {name: "Gia Sư", value: 'TUTOR'},
      {name: "Lớp Học", value: 'PARENT'}
    ];
    $scope.registerUser = function () {
      $scope.data = {
        username: $scope.input.username,
        password: $scope.input.password,
        role: $scope.input.role
      };
      OauthService.registerUser($scope.data)
        .then(
          function (response) {
            console.log(response);
            window.alert("Đăng Ký Thành Công");
            $state.go('app.login');
          },
          function (error, data) {
            console.log(error + data);

          }
        )
    }
  });
