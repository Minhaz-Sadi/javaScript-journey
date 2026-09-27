class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // for static --> no access
        return `123`;
    }
}

const sadi = new User("Sadi");

// console.log(sadi.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}
const iphone = new Teacher("iphone", "i@hone.com");

iphone.logMe();

console.log(iphone.createId()); // no access





// node 10-OOP/staticProp.js