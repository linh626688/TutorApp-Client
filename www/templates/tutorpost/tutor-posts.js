/**
 * Created by DangThanhLinh on 04/03/2017.
 */
angular.module('app')
  .controller('TutorPostsCtrl', function ($scope, $http, TutorPost) {
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
