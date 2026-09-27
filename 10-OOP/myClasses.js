// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changerUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const car = new User("car", "car@example.com", "123");

// console.log(car.encryptPassword());
// console.log(car.changerUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changerUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@example.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changerUsername());


// node 10-OOP/myClasses.js