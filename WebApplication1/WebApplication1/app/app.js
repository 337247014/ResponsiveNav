var app = angular.module('app', ['ngRoute']);

 app.config(function($routeProvider, $locationProvider){
     $routeProvider
         .when('/home', {
             templateUrl: '/app/home.html',
             secure: true
         })
         .otherwise({ redirectTo: '/home' });
 });