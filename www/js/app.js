// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('app.controllers', []);
angular.module('app.config', []);
var app = angular.module('app', ['ionic', 'app.controllers', 'app.run', 'app.config', 'ionic-material'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  });

angular.module('app.config')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })
      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login/login.html',
            controller: 'OauthCtrl'
          }
        }
      })
      .state('app.register', {
        url: '/register',
        views: {
          'menuContent': {
            templateUrl: 'templates/login/register.html',
            controller: 'RegisterCtrl'
          }
        }
      })
      .state('app.tutor-posts', {
        url: '/tutor-posts',
        views: {
          'menuContent': {
            templateUrl: 'templates/tutorpost/tutorposts.html',
            controller: 'TutorPostsCtrl'
          }
        }
      })
      .state('app.tutor-post', {
        url: '/tutor-posts/:postId',
        views: {
          'menuContent': {
            templateUrl: 'templates/tutorpost/tutorpost.html',
            controller: 'TutorPostCtrl'
          }
        }
      })
      .state('app.tutors', {
        url: '/tutors',
        views: {
          'menuContent': {
            controller: 'TutorsCtrl',
            templateUrl: 'templates/user/tutor/tutors.html'
          }
        }
      })
      .state('app.tutor', {
        url: '/tutors/:tutorId',
        views: {
          'menuContent': {
            templateUrl: 'templates/user/tutor/tutor.html',
            controller: 'TutorCtrl'
          }
        }
      })


      .state('app.parent-post', {
        url: '/parent-post',
        views: {
          'menuContent': {
            templateUrl: 'templates/parentpost/parentposts.html',
            controller: 'ParentPostCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/tutor-posts');
  })

