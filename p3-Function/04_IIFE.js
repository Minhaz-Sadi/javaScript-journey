// Immediately Invoke Function Expressions (IIFE)
// use for global scope pollution problem solution
(function code(){
    console.log("DB CONNECTED");

})(); // semi-colon must use, otherwise no end

// ()->parentasis ()-execution 

( () => {
    console.log(`DB CONNECTED TWO`);
    
} )();

( (name) => {
    console.log(`DB CONNECTED to ${name}`);
    
} )("Sadi");


// node basicJS-p3/04_IIFE.js