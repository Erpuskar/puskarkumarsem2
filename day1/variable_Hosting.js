//variable hosting in JavaScript
console.log(a);
var a = 10;
// In JavaScript, variable declarations using 'var' are hoisted to the top of their scope. This means that the declaration of 'a' is moved to the top of the code, but its assignment (a = 10) remains in place. Therefore, when we try to log 'a' before its assignment, it will output 'undefined' instead of throwing an error.
console.log(a); // Output: undefined

console.log(b);
let b = 20;
// In contrast, variables declared with 'let' and 'const' are also hoisted, but they are not initialized until their declaration is evaluated. This means that accessing 'b' before its declaration will result in a ReferenceError, as it is in a "temporal dead zone" until the declaration is reached.
// console.log(b); // This will throw a ReferenceError: Cannot access 'b' before initialization
console.log(b)