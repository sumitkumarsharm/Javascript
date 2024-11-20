// var
// global scope

// if (true) {
//   var A = 98;
//   console.log(A);
// }
// console.log(A);

// functional scope

// function solve() {
//   var A = 76;
//   console.log(A);
// }
// console.log(A); // output : ReferenceError: A is not defined
// solve();

// Rerandering
// var A = 10;
// var A = 787;
// console.log(A);

// let

// global scope
// let a = 10;
// console.log(a);

// block scope
// if (true) {
//   let a = 10;
//   //   console.log(a); // output :10
// }
// console.log(a); // Output : ReferenceError: a is not defined

// functional scope

// function solve() {
//   let v = 10;
// //   console.log(v);
// }
// console.log(v);  // ReferenceError: a is not defined
// solve();

// Redefinition
// let x = 10;
// let x = 10

// const

// console.log (A);

// {
//   const A = 40;
//   console.log(A);
// }

//   const A = 40;

//   A = 55;// output TypeError: Assignment to constant variable.

// variable naming convenction

// we can create variable name start with number underscore char dollarsign ...etc
// 1. we can use cammel case
// 2. we can use snake case
// .... many rule  more



// data types
// Number
// let marks = 978

// bigInt
let num = 12345678901234567890
console.log(num);

