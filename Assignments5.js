// a) Arrow function isEven(n)
const isEven = n => n % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// b) Rewrite using ternary operator
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result); // Pass


// c) Arrow function greet(name) using ternary + default message
const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);

greet("Triveni"); // Hello, Triveni
greet();          // Hello, Guest
