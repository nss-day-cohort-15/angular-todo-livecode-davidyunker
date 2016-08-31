"use strict";
// this is the parent module
var app = angular.module("ToDoApp", ["ngRoute"]);

// angular-route separate angular library. has to be added as a dependency and listed as a third party library

// name of the module is ngRoute. Must inject it and now it's available to us.

// When we talk about routing, we're talking about the URL of the application

app.config(function($routeProvider) {
    $routeProvider.
        when("/items/list", {
            templateUrl: "partials/item-list.html",
            controller: 'TodoCtrl',
        }).
        when("/items/new", {
            templateUrl: "partials/item-form.html",
            controller: "TodoCtrl"
        }).
        otherwise("/items/list");
        // way to make sure they don't go anywhere else.

});

// when the route is this, use this.
// templateUrl == U is capitalized. everything else isn't


