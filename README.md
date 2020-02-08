# learn-angular-1x
[X] How to set up an AngularJS.

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

