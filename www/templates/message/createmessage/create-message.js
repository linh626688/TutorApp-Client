/**
 * Created by DangThanhLinh on 09/05/2017.
 */
angular.module('app')
  .controller('messageCreateCtrl', function ($state, $scope, $stateParams, messageService) {
    $scope.message = [];
    $scope.sendMessage = function () {
      var data = {
        email: $scope.message.email,
        contact: $scope.message.contact,
        detailRequest: $scope.message.detailRequest
      };
      console.log('Message', data);
      messageService.sentMessage(data, $stateParams.postId)
        .then(
          function (response) {
            console.log(response)
          },
          function (error, data) {
            console.log("error " + data);
          }
        )
    }
  });
