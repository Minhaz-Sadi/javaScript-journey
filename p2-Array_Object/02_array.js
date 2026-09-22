const marvel = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel.push(dc); // array in array..not add

// console.log(marvel);
// console.log(marvel[3][1]);
// console.log(dc);

// marvel.concat(dc); // array in array also
// console.log(marvel);

// const all = marvel.concat(dc); // now add
// console.log(all);



const allNew = [...marvel, ...dc]; // easy role to add them
// console.log(allNew);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);

// console.log(realAnotherArray);


console.log(Array.isArray("Sadi")); // flase
console.log(Array.from("Sadi")); // convert in array

console.log(Array.from({name: "Sadi"})); // interesting


let score1  = 100;
let score2  = 200;
let score3  = 300;

console.log(Array.of(score1, score2)); // like as array






