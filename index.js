// Exercise 1

// We have a simple object:
// let user = {
//   name: "John",
//   years: 30
// }
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

// let user = {
//   name: "John",
//   years: 30
// }

// const { name, years: age, isAdmin = false } = user;
// console.log(name, age, isAdmin);




// Exercise 2

// Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?

// let plametName = "Earth";
// let currentVisitor = "Alice";




// Exercise 3

// Look at the code. What will be the result of the call at the last line and why?

// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   console.log(user);
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }

// sayHi();

// The function sayHi() was declared inside the block, but it didn't 
// become accessible outside of that blick.

// let phrase = "Hello";
// let sayHi;

// if (true) {
//   let user = "John";
//   console.log(user);

//   sayHi = function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();




// Exercise 4

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let user = {
//     name: "John",
//     surname: "Smith",
// };

// user.name = "Pete";
// console.log(user.name);

// delete user.name;
// console.log(user.name);




// Exercise 5

// Is it possible to change an object declared with const, how do you think and why?
// const user = {
//   name: "John",
// }

// // does it work?
// user.name = "Pete";
// console.log(user);
//we can change the content of an object declared with const
// but we can't reassign the variable itself.




// Exercise 6

// We have an object storing the salaries of our team:
// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }

// let sum = 0;

// for (let key in salaries) {
//     sum+= salaries[key];
// }
// console.log(sum);




// Exercise 7

// Rewrite this if using the ternary operator '?':

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// let a = 1;
// let b = 2;

// let result = a + b < 4 ? 'Below' : 'Over';
// console.log(result);


// Exercise 8

// Rewrite if..else using multiple ternary operators '?'.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let login = 'Director';

// let message = login == 'Employee' ?  'Hello':
//               login == 'Director' ? 'Greetings':
//               login == '' ? 'No login':
//               '';
// console.log(message);