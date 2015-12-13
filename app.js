angular.module('MyApp', ['MyApp.controllers'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LinkedinLoginCtrl'
      }
    }
  })
  .state('authorised', {
    url: '/authorised',
    views: {
      'menuContent': {
        templateUrl: 'templates/authorised.html',
        controller: 'LinkedinCtrl'
      }
    }
  });
  
  $urlRouterProvider.otherwise('/app/login');
  
});
