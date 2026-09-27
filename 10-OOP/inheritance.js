class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const car = new Teacher("car", "car@gmail.com", "123");

car.addCourse();
car.logMe();

const tea = new User("tea");

tea.logMe();


// console.log(tea === car); // false
// console.log(Teacher === car); // false

console.log(car instanceof Teacher); // true
console.log(car instanceof User); // true









// node 10-OOP/inheritance.js