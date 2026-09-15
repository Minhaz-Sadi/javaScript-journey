"use strict"; // treat all js code as newer version

//alert(3 + 3); // we are using nodejs, not browser


console.log(3+3);
console.log("Sadi");

let name = "sadi";
let age = 20;
let isLoggedIn = false;
let state;

// number  --> 2^53
// bigint 
// string --> ""
// boolean --> true / false
// null --> standalone value
// undifined --> not assined value
// symbol --> unique


// object

console.log(typeof "Sadi");
console.log(typeof ("Sadi")); // same work

console.log(typeof null); //object
console.log(typeof undefined); //undifined



// primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol('123');
// console.log(id);

// Reference (Non primitive)
// Array, Objects, Functions 

const heros = ["A", "B", "C"];
let obj = {
    name: "Sadi",
    age:22
}

const myFunction = function(){
    console.log("Hello World!");
}




// ===============
// Stack(Primitive), Heap(Non-Primitive)
