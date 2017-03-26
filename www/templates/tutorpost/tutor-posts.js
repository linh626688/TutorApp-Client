/**
 * Created by DangThanhLinh on 04/03/2017.
 */
angular.module('app')
  .controller('TutorPostsCtrl', function ($scope, $http, tutorPostService, ionicMaterialMotion) {
    $scope.postTutors = [];
    tutorPostService.getAllPostTutors()
      .success(function (response) {
        $scope.postTutors = response;
      })
    var reset = function () {
      var inClass = document.querySelectorAll('.in');
      for (var i = 0; i < inClass.length; i++) {
        inClass[i].classList.remove('in');
        inClass[i].removeAttribute('style');
      }
      var done = document.querySelectorAll('.done');
      for (var i = 0; i < done.length; i++) {
        done[i].classList.remove('done');
        done[i].removeAttribute('style');
      }
      var ionList = document.getElementsByTagName('ion-list');
      for (var i = 0; i < ionList.length; i++) {
        var toRemove = ionList[i].className;
        if (/animate-/.test(toRemove)) {
          ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
        }
      }
    }
    $scope.ripple = function () {
      reset();
      document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
      setTimeout(function () {
        ionicMaterialMotion.ripple();
      }, 500);
    };
    $scope.ripple();

  });
