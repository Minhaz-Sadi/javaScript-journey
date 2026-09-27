
// scope -- >>> {}
//var c = 300;
let a = 1000;
if(true){
    let a = 10; 
    const b = 20;
    //var c = 30;
    // console.log("a =", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c); // only print 30 for var


// Nested

function one(){
    const name = "Sadi";

    function two(){
        const website = "website";
        console.log(name);
    }
    // console.log(website); 
    two();
    
}
// one();

if(true){
    const username = "Sadi";
    if(username === "Sadi"){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log((username));

// ==== interesting ====

addOne(5);
console.log(addOne(5)); // 6

function addOne(num){
    return num + 1;
}



// addTwo(7); // not use on upper for this type
const addTwo = function(num){
    return num + 2;
}







// node basicJS-p3/02_scope.js