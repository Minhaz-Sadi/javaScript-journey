
const user = {
    username: "Sadi",
    price: 199,

    welcomeMsg: function() {
        console.log(`${this.username}, welcome`);
        console.log(this);
        
    }
}

// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg();
// console.log(this);



// function code(){
//     let username = "Sadi";
//     console.log(this.username); // used in object, so this is undefined
    
// }
// code();


// const code = function(){
//     let username = "Sadi";
//     console.log(this.username); // same undefined
// }
// code();

const code = () =>{
    let username = "Sadi";
    // console.log(this.username); // same undefined
    console.log(this); // but its empty
}
// code();

// == arrow ==

// const addTwo = (num1, num2) => {
//     return (num1 + num2);
// }


// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);


// const addTwo = (num1, num2) => {username: "Sadi"}; // undedined
const addTwo = (num1, num2) => ({username: "Sadi"});  

console.log(addTwo(3, 6));







// node basicJS-p3/03_arrow.js