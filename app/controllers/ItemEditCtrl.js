
"use strict";

app.controller("ItemEditCtrl", function($location, $scope, $log, $routeParams, ItemStorage, $http) {

  ItemStorage.getItem($routeParams.itemId)
  .then((singleItem) =>{
    $scope.editTask = singleItem;
  });

  $scope.editItem = (itemObj) => {
    ItemStorage.editItem(itemObj.id, itemObj)
    .then((response) =>{
      $log.info('Task updated!', response);
      $location.url('/items/list');
    });
  };

});