/**
 * Created by DangThanhLinh on 26/03/2017.
 */
angular.module('app')
  .factory('parentPostService', function ($http) {
    return {
      getAllPostParents: getAllPostParent,
      getPostParent: getPostParent
    }
    function getAllPostParent() {
      return $http({
          url: 'http://35.185.156.51:8080/allPostParent',
          method: 'GET'
        }
      );
    }
    function getPostParent(postId) {
      return $http({
          url: 'http://35.185.156.51:8080/postParent/'+postId,
          method: 'GET'
        }
      );
    }
  })
