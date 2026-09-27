function SetUserName(username) {
    // complex DB calls
    this.username = username;
    console.log("Called");
    
}

function createUser(username, email, password){
    // SetUserName(username); //  call but no data, bcz reference no hold
    // SetUserName.call(username); // also no solution

    SetUserName.call(this, username); // now user name set

    this.email = email;
    this.password = password;
}

const car = new createUser("car", "car@gmail.com", "123");
console.log(car);



// node 10-OOP/call.js
