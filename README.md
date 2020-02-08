# learn-angular-1x

[X] How to set up an AngularJS.

```javascript
// This initializes the app
const myApp = angular.module("myApp", []); // function (takes a name (name of app), and an array of dependencies [])

// first thing declare a controller # THIS IS THE MODEL #
myApp.controller("mainController", () => {

  
 });

```

# Dependency Injection: Giving a function an object.

- Rather than creating an object inside a function, you pass it to the function.

```javascript
let Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
};

let logPerson = person => {
  console.log(person);
};

let tas = new Person("Taslim", "Y");
logPerson(tas);
```

# Scope

```javascript
// This initializes the app
const myApp = angular.module("myApp", []); // function (takes a name (name of app), and an array of dependencies [])

// first thing declare a controller # THIS IS THE MODEL #
myApp.controller("mainController", $scope => {
  $scope.name = "Tas";
  $scope. = "coder :)";

  $scope.getname = () => {
    return "Tas Tas";
  };

  $scope.getname();

  console.log($scope);
});
```
