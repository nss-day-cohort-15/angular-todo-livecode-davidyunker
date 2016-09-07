"use strict";

app.controller('TopCtrl', function($scope, $location, $window, AuthFactory) {
  $scope.isLoggedIn = false;
  // setting a watcher on our Firebase auth

  let currentUser = null;

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      currentUser = user.uid;
      // already has user passed into. Can grab the ID here.
      $scope.isLoggedIn = true;
      console.log("Current user logged in?", user.uid);
    } else {
      currentUser = null;
      // when they log out back to null.
      $scope.isLoggedIn = false;
      $window.location.href ="#/login";
    }
     // we have to force the digest cycle to happen to update the view
      $scope.$apply();
  });
  $scope.getUser = function () {
    return currentUser;
  }


  $scope.logout = function () {
    AuthFactory.logoutUser()
    .then(function(data){
      console.log("logged out", data);
    });
  };
});