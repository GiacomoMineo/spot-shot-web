"use strict";var app=angular.module("spotShotWebApp");app.module("spotShotWebApp",["ngRoute"]).config(function(a){a.when("/",{templateUrl:"views/landing.html",controller:"LandingCtrl"}).otherwise({redirectTo:"/"})});