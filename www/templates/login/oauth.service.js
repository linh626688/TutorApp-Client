/**
 * Created by DangThanhLinh on 08/04/2017.
 */
angular.module('app')
  .factory('OauthService', function ($http) {
    return {
      registerUser: registerUser,
      userLogin: userLogin,
      userLogout: userLogout,
      addRoleUser: addRoleUser
    };
    function registerUser(dataUser) {
      return $http({
        url: 'http://35.185.156.51:8080/signup',
        method: 'POST',
        data: dataUser,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    function userLogin(input) {
      return $http({
        url: 'http://35.185.156.51:8080/login',
        method: 'POST',
        data: input,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    function userLogout() {

    }


    function addRoleUser() {

    }
  });
