//1.with function keyword
function add(a,b){
    return a+b;
}
console.log(add(2,3));

//2.with arrow function
const addFun =(a,b)=>{
    return a+b;
}
console.log(addFun(4,5));

//3.anonymous function
const logMessage = function() {
    console.log("Hello, World!");
};
logMessage();

//4.IIFE (Immediately Invoked Function Expression)
(function greet(){
    console.log("Hello, World!");
})();