
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

cons emtyObj = {};

if(Object.keys(emtyObj).length === 0){
    console.log("pbject is empty");
    
}

// node basicJS-p4/03_truthy-falsy.js