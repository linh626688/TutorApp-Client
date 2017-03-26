/**
 * Created by DangThanhLinh on 26/03/2017.
 */
angular.module('app')
  .factory('tutorPostService', function ($http) {
    return {
      getAllPostTutors: getAllPostTutors,
      getPostTutor: getPostTutor
    }
    function getAllPostTutors() {
      return $http({
          url: 'http://35.185.156.51:8080/allPostTutor',
          method: 'GET'
        }
      );
    }
    function getPostTutor(postId) {
      return $http({
          url: 'http://35.185.156.51:8080/postTutor/'+postId,
          method: 'GET'
        }
      );
    }

  })
