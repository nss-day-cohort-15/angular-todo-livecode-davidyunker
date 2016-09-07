"use strict";
// no longer using this anymore has been removed from the index



app.controller("TodoCtrl", function ($scope, $location) {

    // new task object
    $scope.newTask = {};
    $scope.newItem = function () {
        $location.url("/items/new");

    };
    $scope.allItem = function () {
        $location.url("/items/list");
    };
    $scope.addNewItem = function () {
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };
});