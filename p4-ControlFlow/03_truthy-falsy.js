
// const userMail = "sadi123@gmail.com";
// const userMail = ""; // false
const userMail = []; // true

if(userMail){
    console.log("Got user mail");
    
}
else{
    console.log("Don't have user mail");
}

// falsy vlaues

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function(){}

if(userMail.length === 0){
    console.log("array is empty");
}

const emtyObj = {};

if(Object.keys(emtyObj).length === 0){
    console.log("pbject is empty");
}

// Nullish Coalescing Operation (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);


// Terniary Operator

// conditon ? true : false 

const price = 200;

// price >= 80 ? console.log("yes") : console.log("No");
price >= 220 ? console.log("yes") : console.log("No");





// node basicJS-p4/03_truthy-falsy.js