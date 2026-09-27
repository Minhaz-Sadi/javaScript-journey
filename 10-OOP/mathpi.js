
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const car = {
    name: 'bugatti car',
    price: 2500000000,
    isAvailable: true,

    oderCar: function(){
        console.log("car nhi hai");
    }
}

console.log(Object.getOwnPropertyDescriptor(car, "name"));

Object.defineProperty(car, 'name', {
    // writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(car, "name"));
for (let [key, value] of Object.entries(car)) {
    if(typeof value != 'function'){ 
        console.log(`${key}: ${value}`);
    }
    
}




// node 10-OOP/mathpi.js