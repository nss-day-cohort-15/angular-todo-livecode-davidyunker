"use strict";

app.controller("ItemListCtrl", function ($scope, ItemStorage, SearchTermData, $location) {
// now we inject the item factory
  $scope.searchText = SearchTermData;
  ItemStorage.getItemList()
  // because it returns a promise we can do a .then()
    .then((itemCollectionArr) => {
      console.log("item collection", itemCollectionArr);
      $scope.items = itemCollectionArr;
    });
    $scope.itemDelete = (itemId) => {
      ItemStorage.deleteItem(itemId)
      // function will return a promise so we can use .then() here
      //the factory is going to do the dirty work
      .then((response) => {
        ItemStorage.getItemList()
        .then((itemCollectionArr) => {
          $scope.items = itemCollectionArr;
        });
        // reload it now that it's minus a single task
        //$scope is now the latest version of our list
      });
    };

      $scope.itemEditView = (itemId) => {
    $location.url(`/items/edit/${itemId}`);
  };

      // function will return a promise so we can use .then() here
      //the factory is going to do the dirty work
});