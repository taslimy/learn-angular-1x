# learn-angular-1x

[X] How to set up an AngularJS.

```javascript
// This initializes the app
const myApp = angular.module("myApp", []); // function (takes a name (name of app), and an array of dependencies [])

// first thing declare a controller # THIS IS THE MODEL #
myApp.controller("mainController", () => {});
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

# Functions and Strings & How does AngularJS do this?

```javascript
const myApp = angular.module("myApp", []);

myApp.controller("mainController", $scope => {
  console.log($scope);
});

// Injects scope and passes it the function via dependency injection
const searchPeople = (firstName, $scope, height, age, occupation) => {
  return "Taslim Y";
};

console.log(angular.injector().annotate(searchPeople));
```
