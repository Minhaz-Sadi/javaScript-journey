
// if

const isLogged = true;

if (2 === "2"){

    console.log("exicuted"); // not reached
    
}
if (2 == "2"){

    console.log("exicuted"); // reached
    
}


// <, > , <=, >=, ==, !=
// === (check type)

const temp = 54;

if(temp < 50){
    console.log(`less than 51`);
}
else{
    console.log(`greater`); 
}

const balance = 1000;
// if(balance > 500) console.log("test"),
// console.log("test2"); // not best practise

// nesting

// if(balance<500){
//     console.log("less 500");
    
// }
// else if(balance<750){
//     console.log("less 750");
    
// }
// else console.log("upper 750");

const userLogedIn = true;
const debitCard = true;

if(userLogedIn && debitCard && 2 == 3){
    console.log("allow to buy courses"); 
}









// node basicJS-p4/01_one.js