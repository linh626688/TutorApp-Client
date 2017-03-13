/**
 * Created by DangThanhLinh on 04/03/2017.
 */
angular.module('app')
  .controller('TutorPostsCtrl', function ($scope, $http, TutorPost, ionicMaterialMotion) {
    $scope.page = 0;
    $scope.tutorpost = [];
    $scope.getImageTutor = function () {
      $scope.page++;
      $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?age=' + $scope.page)
        .success(function (response) {
          angular.forEach(response.restaurants, function (restaurant) {
            $scope.tutorpost.push(restaurant);
          });

          $scope.total = response.totalPages;
        })
    };
    $scope.getImageTutor();

    $scope.listTutor = TutorPost;

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
  .factory('TutorPost', function () {
    return [
      {
        id: '1',
        postContent: 'Toán',
        subject: 'Toán Cao Cấp ',
        time: 4,
        timepost: 5,
        tutorId: 55,
        url_image: 'https://www.opentable.com/img/restimages/72253.jpg'
      },
      {
        id: '2',
        postContent: 'Lý',
        subject: 'Lý Cao Cấp ',
        time: 4,
        timepost: 5,
        tutorId: 55,
        url_image: 'https://www.opentable.com/img/restimages/49108.jpg'
      },
      {
        id: '3',
        postContent: 'Hóa',
        subject: 'Hóa Cao Cấp ',
        time: 4,
        timepost: 5,
        tutorId: 55,
        url_image: 'https://www.opentable.com/img/restimages/92827.jpg'
      },
      {
        id: '4',
        postContent: 'Văn',
        subject: 'Văn Cao Cấp ',
        time: 4,
        timepost: 5,
        tutorId: 55,
        url_image: 'https://www.opentable.com/img/restimages/76030.jpg'
      },
      {
        id: '5',
        postContent: 'Anh',
        subject: 'Anh Cao Cấp ',
        time: 4,
        timepost: 5,
        tutorId: 55,
        url_image: 'https://www.opentable.com/img/restimages/56422.jpg'
      },
      {
        id: '6',
        postContent: 'Sử',
        subject: 'Sử Cao Cấp ',
        time: 4,
        timepost: 5,
        tutorId: 55,
        url_image: 'https://www.opentable.com/img/restimages/49108.jpg'
      },
      {
        id: '7',
        postContent: 'Địa',
        subject: 'Địa Cao Cấp ',
        time: 4,
        timepost: 5,
        tutorId: 55,
        url_image: 'https://www.opentable.com/img/restimages/56422.jpg'
      }]
  })
;
