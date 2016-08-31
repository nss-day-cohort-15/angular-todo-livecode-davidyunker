"use strict";
// creating controller for the navbar//


app.controller("NavCtrl", function ($scope) {
    $scope.navItems = [
    {name: "Logout"},
    {name: "All Items"},
    {name: "New Items"}
    ];
});
