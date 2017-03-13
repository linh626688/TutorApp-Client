/**
 * Created by DangThanhLinh on 08/03/2017.
 */
angular.module('app')
  .controller('TutorsCtrl', function ($scope, $http, Tutor, ionicMaterialMotion) {
    $scope.page = 0;
    $scope.tutors = [];
    $scope.getImageTutor = function () {
      $scope.page++;
      $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?age=' + $scope.page)
        .success(function (response) {
          angular.forEach(response.restaurants, function (restaurant) {
            $scope.tutors.push(restaurant);
          });

          $scope.total = response.totalPages;
        })
    };
    $scope.getImageTutor();

    $scope.tutors = Tutor;
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
  })
  .factory('Tutor', function () {
    return [
      {
        id: '1',
        fristname: 'Linh',
        gender: 'Male ',
        lastname: 'Dang Thanh',
        url_image: 'https://www.opentable.com/img/restimages/72253.jpg'
      },
      {
        id: '2',
        fristname: 'Linh',
        gender: 'Male ',
        lastname: 'Dang Thanh',
        url_image: 'https://www.opentable.com/img/restimages/49108.jpg'
      },
      {
        id: '3',
        fristname: 'Linh',
        gender: 'Male ',
        lastname: 'Dang Thanh',
        url_image: 'https://www.opentable.com/img/restimages/92827.jpg'
      },
      {
        id: '4',
        fristname: 'Linh',
        gender: 'Male ',
        lastname: 'Dang Thanh',
        url_image: 'https://www.opentable.com/img/restimages/76030.jpg'
      },
      {
        id: '5',
        fristname: 'Linh',
        gender: 'Male ',
        lastname: 'Dang Thanh',
        url_image: 'https://www.opentable.com/img/restimages/56422.jpg'
      },
      {
        id: '6',
        fristname: 'Linh',
        gender: 'Male ',
        lastname: 'Dang Thanh',
        url_image: 'https://www.opentable.com/img/restimages/49108.jpg'
      },
      {
        id: '7',
        fristname: 'Linh',
        gender: 'Male ',
        lastname: 'Dang Thanh',
        url_image: 'https://www.opentable.com/img/restimages/56422.jpg'
      }]
  });
