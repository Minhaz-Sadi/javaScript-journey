// details --> https://chatgpt.com/share/6ab8b904-0d04-83e8-8ce2-232881a52f1a



const  promiseOne = new Promise(function(reslove, reject){
    // Do an async task
    // DB calls, cryptograaphy, network
    setTimeout(function(){
        console.log('Async task is complete');
        reslove(); // for this print the 'promise consumed'
    }, 1000);
});


promiseOne.then(function(){
    console.log('promise consumed');
    
}); // connect with resolve

// way-2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        
    }, 1000)
}).then(function(){
    console.log('promise consumed 2');
    
});



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "minhaz",
            email: "minhaz@example.com"
        });
    }, 1000)
});

promiseThree.then(function(user){
    console.log(user);
    
});


const promiseTfour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = true;
        let error = false;
        if(!error){
            resolve({
            username: "sadi",
            password: "sadi@123"
        });
        }
        else{
            reject('Error: something went wrong');
        }
    }, 1000)
});

promiseTfour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username); 
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log('promise is rejecter or resolve')) // catch use for reject and finally all time execute


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({
            username: "javaScript",
            password: "123"
        });
        }
        else{
            reject('Error: JS went wrong');
        }
    }, 1000)
});

// different way 

async function consumePromiseFive(){
    // const response = await promiseFive;
    // console.log(response); // if error = true -> cannot handle

    // way-2 -> error handle
    try {
        const response = await promiseFive;
        console.log(response); 
        
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive();



// === practise -> next file ===

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/Minhaz-Sadi');

//         const data = await response.json(); // make json and it also takes time thats why use await
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     } 
// }
// getAllUsers();


// .then, .catch formet

fetch('https://api.github.com/users/Minhaz-Sadi')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
}) // this .then is returned /of qst .then
.catch((error) => console.log(error))



// node p9-Advance_One/promises.js