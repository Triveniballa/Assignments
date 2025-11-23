// a) Template Literals
const username = "Triveni";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);


// b) Object Shorthand
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};


// c) Arrow Function Shorthand (Implicit Return)
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Sam", "Wilson")); // Example use
