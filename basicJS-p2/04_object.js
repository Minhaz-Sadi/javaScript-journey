const tinderUser = new Object();
// const tinderUser = {}; // same but non-sigleton

tinderUser.id = "123abc";
tinderUser.name = "jack";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regUser = {
    email: "jack@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sadi",
            lastname: "Md."
        }
    }
}

// console.log(regUser.fullname.userfullname);
// console.log(regUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2); // empty object is destination, so it is good practise

const obj3 = {...obj1, ...obj2}; // most use for combine
console.log(obj3);

// if comes from database
const users = [
    {
        id:1,
        name: "Sadi"
    },
    {
        id: 2,
        naem: "Karim"
    }
];

// users[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // all key and value in array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "learn JS",
    price: "999",
    courseInstructor: "Sadi"
}

// course.courseInstructor

const {courseInstructor: Ins} = course;

// console.log(courseInstructor); // directly print
console.log(Ins); 

// ====API=====
// JSON
// {
//     "name": "Sadi",
//     "cName": "learn jS",
//     "price": "free"
// }

// node basicJS-p2/04_object.js