"use strict";
// can't leverage the parent thing in the factory

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {
  let getItemList = (user) => {
    let items = [];
    return $q((resolve, reject) => {
      // instead of retunr new Promise it's return $q
      // we're returning a promise wrapped in an ajax call
      $http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
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


    let getItem = (itemId) => {
    return $q((resolve, reject)=> {
      $http.get(`${FirebaseURL}/items/${itemId}.json`)
      .success((singleItem) =>{
        resolve(singleItem);
      })
      .error((error)=> reject(error));
    });
  };

    // //
  // let getSingleItem = (itemId) => {
  //   return $q((resolve, reject) => {
  //     $http.get(`{$FirebaseURL}/items/${itemId}.json`)
   //     .success((itemObject) => {
        //   resolve(itemObject);
        // })


  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      // $http.post takes two arguments the url and the stringify
      $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newItem))
        .success((ObjFromFirebase) => {
          resolve(ObjFromFirebase);
        })
        .error ((error) => {
          reject(error);
        });
// this will post to Firebase
    });
  };




  //
  //

  let deleteItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((ObjFromFirebase) => {
        resolve(ObjFromFirebase);
      });
    });
  };

    let editItem = (itemId, newDataObj) => {
    return $q((resolve, reject) =>{
      $http.patch(`${FirebaseURL}/items/${itemId}.json`, newDataObj)
      .success((result) => resolve(result))
      .error((error) => console.error(error.error));
    });
  };

  //    let updateItem = (itemId, editedItem) => {
  //   return $q((resolve, reject) =>{
  //     $http.patch(`${FirebaseURL}/items/${itemId}.json`,
  //       JSON.stringify(editedItem))
  //     .success((ObjFromFirebase) => resolve(ObjFromFirebase))
  //     .error((error) => console.error(error.error));
  //   });
  // };

  return {getItemList, postNewItem, deleteItem, editItem, getItem};
});

// now controllers can do work

// this is where the interaction with the data actually happens now
// factories make info available for multiple controllers
