// singleton 

// object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Sadi",
    "full name": "Md. Sadi", // dot(.) not accessable
    [mySym]: "mykey1", // symbol define
    age: 20,
    location: "hathazari",
    email: "sadi@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Sat"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// change
// JsUser.email = "minhaz.com";
// console.log(JsUser.email);
// // o changable --> freeze
// Object.freeze(JsUser);
// JsUser.email = "minhaz-sadi123.com";
// console.log(JsUser.email); // no chnage for freeze


// console.log(JsUser);



// funtion include

JsUser.greeting = function(){
    console.log("Hello jsUser");   
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log( `hello js user, ${this.name}`);   
}

console.log(JsUser.greetingTwo());


// node basicJS-p2/03_object.js