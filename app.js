// This initializes the app
const myApp = angular.module("myApp", []); // function (takes a name (name of app), and an array of dependencies [])

// first thing declare a controller # THIS IS THE MODEL #
myApp.controller("mainController", $scope => {
  console.log($scope);
});

// Injects scope and passes it the function via dependency injection
const searchPeople = (firstName, $scope, height, age, occupation) => {
  return "Taslim Y";
};

console.log(angular.injector().annotate(searchPeople));
