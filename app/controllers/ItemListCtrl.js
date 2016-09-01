"use strict";

app.controller("ItemListCtrl", function ($scope, ItemStorage, SearchTermData) {
// now we inject the item factory
  $scope.searchText = SearchTermData;
  ItemStorage.getItemList()
  // because it returns a promise we can do a .then()
    .then((itemCollection) => {
      $scope.items = itemCollection;
    });
});