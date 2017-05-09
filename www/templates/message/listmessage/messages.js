/**
 * Created by DangThanhLinh on 09/05/2017.
 */
angular.module('app')
  .controller('messagesCtrl', function ($state, $scope, $stateParams, messageService, $localStorage) {
    $scope.messageList = [];
    if ($localStorage.user != null) {
      $scope.tokenTutor = $localStorage.user.data.token;
    }
    messageService.getAllMessages($scope.tokenTutor)
      .then(function (response) {
          $scope.messageList = response;
          console.log(response)
        },
        function (error, data) {
          console.log(error + data)
        })
  });
