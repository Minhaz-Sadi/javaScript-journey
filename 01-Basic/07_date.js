let myDate = new Date();

// console.log(typeof myDate); //object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2026-09-13");
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp); // in mili-second

// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.getTime()); // also ms

// in second -->
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getMonth()} and ----`


console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));











