"use strict";

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {
  let getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      // instead of retunr new Promise it's return $q
      // we're returning a promise wrapped in an ajax call
      $http.get(`${FirebaseURL}/items.json`)
      .success((itemObject) => {
        // when we get our itemObject object back, we're going to resolve with items, which is an array

         //  object of objects
         //  the unique ID which is the key, which we want to stick inside the object to use it to populate the dom.
         // object.keys takes every key, which then gives an array of the crazy numbers
         // we can run a
         // this isn't adding to Firebase
        Object.keys(itemObject).forEach((key) => {
          itemObject[key].id = key;
          items.push(itemObject[key]);
          // grabbing the crazy long ID and adding it to the object with the key of id
          // each object of our object of ob
        });
        resolve(items);
      })
      .error((error) => {
        reject(error);
      });
    });
  };
  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      // $http.post takes two arguments the url and the stringify
      $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newItem))
        .success((ObjFromFirebase) => {
          resolve(ObjFromFirebase);
        })
        .error ( (error) => {
          reject(error);
        });
// this will post to Firebase
    });
  };

  let deleteItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((ObjFromFirebase) => {
        resolve(ObjFromFirebase);
      });
    });
  };
  return {getItemList, postNewItem, deleteItem};
});

// now controllers can do work

// this is where the interaction with the data actually happens now
// factories make info available for multiple controllers
