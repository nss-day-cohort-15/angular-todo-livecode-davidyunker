
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

// How Joe did the edit function
// "use strict";

// app.controller("ItemEditCtrl", function ($scope, $location, $routeParams, ItemStorage) {
//   // want to reuse the form, but want it to look different
//   $scope.title = "Edit Item";
//   $scope.btnText = "Update";
//   $scope.newTask = {};
// // fetch item from Firebase
// // routeParams helps get us
//   ItemStorage.getSingleItem($routeParams.itemId)
//   .then ((response) => {
//     $scope.newTask = response;

//   });
// // so we don't have to rename the function
//   $scope.addNewItem = () => {
//     ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
//     .then ((response) => {
//       $location.url("/items/list");
//     });
//   };

// // passing two things into this.

// });