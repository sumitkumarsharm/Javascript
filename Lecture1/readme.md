# variable and DataType

## Variable :

- it is the name of the memory location
- it is used to store the value in the memory location

## Let, Var & Const

- The var keyword was the traditional way of declaring variables in JavaScript. Variables declared with var are function-scoped or globally-scoped, but not block-scoped. This means that variables declared with var are hoisted to the top of their function or global scope. This hoisting behavior can sometimes lead to unexpected results and make debugging challenging.

## function scoped

- When we declare a variable inside a function, we canot access the variable outside the function.that is Function scope.

```
function example() {
    var x = 10;
    console.log(x);
}

example();       // 10
console.log(x);       // Throws ReferenceError: x is not defined
```

## Reassignment and Redefinition using var

- JavaScript, the var keyword allows variables to be both reassigned and redefined within the same scope, unlike let which only allows reassignment. This behavior of var can sometimes lead to unexpected results and bugs in code if not used carefully.

```
// Re assignment using var
var x = 10;
console.log(x);    // Output : 10

x = "Mayank";
console.log(x);    // Output : Mayank
```

```
// Re definition using var
var x = 10;
console.log(x);    // Output : 10

var x = "Mayank";
console.log(x);    // Output : Mayank
```

## let

- the let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined. Block scope refers to any code block delimited by curly braces {} such as loops, conditionals, or function bodies.

```
let x = 10;
if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Throws ReferenceError: y is not defined
```

## Reassignment and Redefinition using let

- Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope. This helps prevent accidental redeclaration of variables and can aid in writing more predictable and maintainable code.

```
// Re assignment using 'let'

let x = 10;
console.log(x);    // Output : 10

x = "Mayank";
console.log(x);    // Output : Mayank
```

```
// Re definition using 'let'

let x = 10;

let x = "Mayank";
console.log(x);    // Output : Error!
```

## const

- the const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.

```
const x = 20;
console.log(x);      // Output : 20

x = 30;
console.log(x);      // Output : Error!
```

## Data Type in javascript

- Two type of data type

1. primitive data type
2. non-primitive data type

1.Primitive Data Type
-Number : -1,2,3,2.455,9.876,...etc
-String : A,B,C,D,E,F,....etc
-Boolean : true, false
-Null :  let Name = null; 
-Undefined : let age; ,let Name;,...etc
-BigInt : 215154
- Symbol (new in ECMAScript 2015)
