"use strict";

app.controller("ItemNewCtrl", function ($scope, ItemStorage, $location) {

  // need to pass in the factory of ItemStorage and also location
// defining a newTask object

// $scope.title = "Add a new task";
// $scope.btnText = "Save new task";
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "normal",
    uid: $scope.$parent.getUser()
  };
// we add the UID here as a property.
  $scope.addNewItem = function () {
    ItemStorage.postNewItem($scope.newTask)
    // passing in $scope.newTask
    // using a promise so when it's done we can relocate back to the list
    .then(function() {
      $location.url("items/list");
    });
  };
});


