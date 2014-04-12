'use strict';

angular
  .module('spotShotWebApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });