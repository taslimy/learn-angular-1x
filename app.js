// This initializes the app
const myApp = angular.module("myApp", []); // function (takes a name (name of app), and an array of dependencies [])

// first thing declare a controller # THIS IS THE MODEL #
myApp.controller("mainController", () => {});

let Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
};

let logPerson = person => {
  console.log(person);
};

let tas = new Person("Taslim", "Y");
logPerson(tas);
