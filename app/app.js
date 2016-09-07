"use strict";
// this is the parent module
var app = angular.module("ToDoApp", ["ngRoute"])
.constant("FirebaseURL", "https://todo-list-543c8.firebaseio.com/");
// this allows us to define an inmutable variable we can use anywhere


// angular-route separate angular library. has to be added as a dependency and listed as a third party library

// name of the module is ngRoute. Must inject it and now it's available to us.

// When we talk about routing, we're talking about the URL of the application

// this runs before angular does its thing

// this below is returning a new promise
let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    if (AuthFactory.isAuthenticated()) {
        console.log("Authenticated user. Go ahead");
        resolve();
    } else {
        console.log("Notauthenticated user. Go away.")
        reject();
    }

});
app.config(function($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        // this stands for home
        when("/items/list", {
            templateUrl: "partials/item-list.html",
            controller: 'ItemListCtrl',
            resolve: {isAuth}

        }).
        when("/items/new", {
            templateUrl: "partials/item-form.html",
            controller: "ItemNewCtrl",
            resolve: {isAuth}

        }).
        when("/items/view/:itemId", {
            templateUrl: "partials/item-details.html",
            controller: "ItemViewCtrl",
            resolve: {isAuth}

    // passing in a variable to stand in as a placeholder for any ID.
        }).
          when('/items/edit/:itemId', {
            templateUrl: 'partials/item-edit.html',
            controller: "ItemEditCtrl",
            resolve: {isAuth}

        }).

        //    }).
        // when("/items/view/:itemId/edit", {
        //     templateUrl: "partials/item-form.html",
        //     controller: "ItemEditCtrl",
        //     resolve: {isAuth}


        otherwise("/");
        // way to make sure they don't go anywhere else.
});

// what you do with the app runs. Takes an argument of an anon. function, going to pass in location provider and constant we just defined
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);


// when the route is this, use this.
// templateUrl == U is capitalized. everything else isn't

});
