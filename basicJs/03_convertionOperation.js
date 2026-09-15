let score  = "33abc";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); 
/* 1. 33 if score = "33"
   2.NaN(not a number) if score = "33abc" */

// true --> 1; flase --> 0

let isLoggedIn = 1;

let booleanInLoggedIn = Boolean(isLoggedIn);
console.log(booleanInLoggedIn);
console.log(typeof booleanInLoggedIn);

// 1 --> true; 0 --> false
// "" --> false
// "Sadi" --> true




let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber); //33
console.log(typeof stringNumber); //string
