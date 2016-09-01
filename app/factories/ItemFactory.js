"use strict";

app.factory("ItemStorage", ($q, $http) => {
  let getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      // instead of retunr new Promise it's return $q
      // we're returning a promise wrapped in an ajax call
      $http.get("../../data/itemList.json")
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
      });
    });
  };
  return {getItemList};
});

// now controllers can do work

// this is where the interaction with the data actually happens now
// factories make info available for multiple controllers
