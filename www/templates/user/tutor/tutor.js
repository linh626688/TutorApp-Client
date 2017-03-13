/**
 * Created by DangThanhLinh on 08/03/2017.
 */
angular.module('app')
  .controller('TutorCtrl', function ($scope, $http, Tutor, $stateParams) {
    angular.forEach(Tutor, function (tutor) {
      if (tutor.id === $stateParams.tutorId) {
        $scope.tutorDetail = tutor;
      }
    });
    console.log($stateParams.tutorId)
  })
