const num = [1, 2, 3, 4, 5,6,7,8,9,10];  
const num2 = num.map(n => n * 2);  //if curly braces are not used then it will return the value of n*2 without using return keyword
console.log(num2); // Output: [2, 4, 6, 8, 10,12,14,16,18,20]
const multipleof2 = num2.filter(n => n % 2 === 0);
console.log(multipleof2); // Output: [2, 4, 6, 8, 10,12,14,16,18,20]
const divisibleBy3 = num2.filter(n => n % 3 === 0);
console.log(divisibleBy3); // Output: [6, 12, 18]
const sum0fNumArray = num.reduce((acc, n) => acc + n, 0);
console.log(sum0fNumArray); // Output: 55