
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
// console.log(loginMsg("Sadi"));
// console.log(loginMsg(""));
// console.log(loginMsg()); // undifined


function calCartPrice(...num1){ // rest operator(...)
    return num1;
}
// console.log(calCartPrice(2, 4, 7, 500));

function calCartPrice2(val1, val2, ...num1){
    return num1;
}
// console.log(calCartPrice2(200, 400, 5000, 23000));

const user = {
    username: "Sadi",
    price : 200
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username: "Sam",
    price: 999
});

// arrays
const myNewArray = [100, 200, 300, 1000];

function returnSecVal(getArray){
    return getArray[1];
}
// console.log(returnSecVal(myNewArray));
console.log(returnSecVal([2000,1,200]));


// node basicJS-p3/01_function.js
