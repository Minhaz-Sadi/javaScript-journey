
const User = {
    _email: 's@sc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);



// node 10-OOP/object_get_set.js