//let name = "John";
//console.log(typeof name + " " + name);
let age = 30;
console.log(typeof(age) + " " + age);
let isStudent = true;
console.log(typeof isStudent);
let score;
console.log(typeof score);
let student = {
    name: "Alice",
    age: 22,
    
};
console.log(typeof student + " " + student.name + ", " + student.age + ", " + student.isStudent);
//let a=10;let b=20;
let sum = a + b;
//console.log("Sum: " + sum);
let difference = a - b;
//console.log("Difference: " + difference);
let product = a * b;
console.log("Product: " + product);
let quotient = a / b;
console.log("Quotient: " + quotient);
let modulus = a % b;
console.log("Modulus: " + modulus);
let x = 5;
x++;
console.log("Increment: " + x);
x--;
console.log("Decrement: " + x);
let z=10; //not run retry in new file or commnent the above code and run only this part
console.log(z+=3);
console.log(z-=2);
console.log(z*=4);
console.log(z/=2);
console.log(z%=3);
let c=15;let d=5;
console.log(c==d);
console.log(c!=d);
console.log(c> d);
console.log(c< d);
console.log(c>=d);
console.log(c<=d);
//switch case
let day = "monday";
switch (day) {
    case 1:
        console.log("monday");
        console.log("Start of the day ");
        break;
    case 2:
        console.log("tueday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("monday");
        break;
    case 5:
        console.log("monday");
        break;
    case 6:
        console.log("monday");
        break;
    case 7:
        console.log("monday");
        break;
}