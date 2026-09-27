
// let myName = "Sadi    ";
// console.log(myName.length);
// console.log(myName.trim().length);

let myChannel = "Explain    ";

let myHerros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
};

Object.prototype.sadi = function(){
    console.log(`Sadi is present in all objects`);
}

Array.prototype.heySadi = function(){
    console.log(`Sadi says Hello`); 
} // access only Array

// heroPower.sadi();
myHerros.sadi();
myHerros.heySadi();
// heroPower.heySadi(); // no power acess 


// === inheritance ===

const User = {
    name: "Karim",
    email: "karim@example.com"
}
const teacher = {
    makevideo: true
}
const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport // reference
}

teacher.__proto__ = User; // old syntex

// modern syntex

Object.setPrototypeOf(teachingSupport, teacher);



let anotherUsername = "SadiExpalins       ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);   
}


anotherUsername.trueLength();

"Karim".trueLength();
"tea".trueLength();

// node 10-OOP/prototype.js
