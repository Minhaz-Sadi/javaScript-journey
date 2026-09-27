// object literal

const user = {
    username: "Sadi",
    loginCount: 8,
    singnedIn: true,

    getUserDetails: function(){
        // console.log("got user details");
        // console.log(`username: ${this.username}`);
        console.log(this);
          
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetung = function(){
        console.log(`welcome, ${this.username}`);
        
    }
    return this;
}

// const userOne = User("Sadi", 12, true);
// const userTwo = User("Minhaz", 11, false); 
// console.log(userOne); // overwrite value by userTwo

// thats why use 'new' --> for new, a empty object created, which is instance, 
// 1. for this a constructor function called, 
// 2. then arguments packed
// 3. all are inject in 'this'
// 4. 'this' return all
const userOne = new User("Sadi", 12, true);
const userTwo = new User("Minhaz", 11, false); 

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);





// node 10-OOP/oop.js