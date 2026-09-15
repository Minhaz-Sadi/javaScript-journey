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


// ===========Operrations==============

let value = 3;
let negValue = -value;
//console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2); // power

let str1 = "hello";
let str2 = ", Sadi";

// let str3 = str1 + str2;
// console.log(str3);


// console.log("1" + 2); // string priority  
// console.log(1 + "2");
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log((3 + 4)* 5 % 3);

console.log(true);
console.log(+true); // 1
//console.log(true+); // wrong

console.log(+""); // 0


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter); //101
++gameCounter;
console.log(gameCounter); // 101






