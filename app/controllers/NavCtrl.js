"use strict";
// creating controller for the navbar//

// controller needs access to the factory
app.controller("NavCtrl", function ($scope, SearchTermData, $location) {
    $scope.searchText = SearchTermData;

    // will now be equal to the object being exported by our factory
    $scope.navItems = [
    {url: "#/logout", name: "Logout"},
    {url: "#/items/list", name: "All Items"},
    {url: "#/items/new", name: "New Items"}
    ];
// don't even need word return or {} brackets
// $location is an angular provider that allows us access to the URL and set where you are.
// $location.path() will compare what you pass in to the path
     $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
// pass in URL so the links can do something