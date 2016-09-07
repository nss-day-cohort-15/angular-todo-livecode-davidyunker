"use strict";

app.controller("ItemViewCtrl", function ($scope, ItemStorage, $routeParams){

// routeParams gives us access to whatever is in the URL bar
$scope.items = [];
// before you used the RESTful api. Now we're getting the whole collection and we're going to grab out of it what we need
// can pass in

  ItemStorage.getItemList($scope.$parent.getUser())
  .then((itemCollectionArr) => {
    $scope.items = itemCollectionArr;
    $scope.selectedItem = $scope.items.filter(function (item) {
      return item.id === $routeParams.itemId;
    })[0];
    // filter takes an array and makes a new array
  });
});