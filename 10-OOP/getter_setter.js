
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    get password(){
        return `${this._password}sadi`;
    }
    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
}

const sadi = new User("sadi@gmail.com", "abc");
console.log(sadi.password);
console.log(sadi.email);






// node 10-OOP/getter_setter.js
