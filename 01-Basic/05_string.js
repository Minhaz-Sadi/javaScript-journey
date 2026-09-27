const name  = "Sadi";
const repoCount = 10;

// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String("Sadi"); //object

// console.log(gameName);
// console.log(typeof gameName);


// console.log(gameName[0]); // S
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2)); //d
// console.log(gameName.indexOf('i')); //3
// console.log(gameName.indexOf('l')); // -1



const shopName = new String("Sadi-hc");

const newString = shopName.substring(0,4);
console.log(newString); // sadi

const anotherString = shopName.slice(0, 4); //works in reverse as like (-7, 4);
console.log(anotherString);

const newString1 = "    Sadi    ";
console.log(newString1);
console.log(newString1.trim()); // space removed

const url = "hhtps://sadi.com/sadi%20minhaz";

// url.replace('%20', '-'); // find '%20' and replace by '-'
console.log(url.replace('%20', '-'));

console.log(url.includes('sa')); // true // check belongs or not
console.log(url.includes('sd')); // false




console.log(shopName.split('-')); // conver array - ['Sadi', 'hc'] --> separate by '-'


