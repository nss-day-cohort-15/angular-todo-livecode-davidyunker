"use strict";
// creating controller for the navbar//

// controller needs access to the factory
app.controller("NavCtrl", function ($scope, SearchTermData, $location) {
    $scope.searchText = SearchTermData;

    // will now be equal to the object being exported by our factory
    // added showState property to all of them.
    //$parent property we're going to put on a higher scope.
    // going to create a different controller that's going wrap the page.
    // controllers will inherit scope from said wrapping controller
    $scope.navItems = [
    {url: "#/logout", name: "Logout", showState: "$parent.isLoggedIn"},
    {url: "#/login", name: "Login", showState: "!$parent.isLoggedIn"},
    {url: "#/items/list", name: "All Items", showState: "$parent.isLoggedIn"},
    {url: "#/items/new", name: "New Items", showState: "$parent.isLoggedIn"}
    ];
// don't even need word return or {} brackets
// $location is an angular provider that allows us access to the URL and set where you are.
// $location.path() will compare what you pass in to the path
     $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
// pass in URL so the links can do something