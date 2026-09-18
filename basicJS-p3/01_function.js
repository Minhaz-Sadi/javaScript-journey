
function sayName(){
    console.log("S");
    console.log("a");
    console.log("d");
    console.log("i");
}

// sayName();


// function addTwoNums(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNums(2, 3);
// addTwoNums(2, "3");
// addTwoNums(2, null);

// const ans = addTwoNums(2, 3);
// console.log("result: ", ans); // undifind, bcz of no return



function addTwoNums(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const ans = addTwoNums(2, 3);
// console.log(ans);



function loginMsg(userName){
    if(userName === undefined){
        console.log("pls enter yous username");
        return;
    }
    return `${userName} just logged in`;
}
console.log(loginMsg("Sadi"));
console.log(loginMsg(""));
console.log(loginMsg()); // undifined

// node basicJS-p3/01_function.js
