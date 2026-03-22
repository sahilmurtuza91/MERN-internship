 //Creating a promise and storing it in a variable
        const promiseOne = new Promise(function(resolve, reject){
            console.log("Promise 1 started (task is in progress...)");
            // Simulating async work (like API call / DB call)
            setTimeout(function(){
                console.log(" Promise 1: Async task completed")
                // Informing promise: "work is done successfully"
                resolve(); // this will trigger .then()
            },2000)
        })
         // Consuming Promise 
        promiseOne.then(function(){
            console.log("Task one is consumed")
        })

         //Promise is Directly creating and consuming without storing
        new Promise(function(resolve, reject){
            console.log("Promise 2 started (task is in progress...)");
            setTimeout(function(){
                console.log("Promise 2: Async task completed")
                resolve();// Marking task as finished
            },2000)
        }).then(function(){
            console.log("Promise 2 consumed: .then() is executed")
        })

        const promiseThree = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve({username:"sahimurtuza91", email:"sahil@example.com"}) // resolve pass the object or single value
            },2000)
        })
        promiseThree.then(function(user){
            console.log(user)
        })

        const promiseFour = new Promise(function(resolve, reject){
            setTimeout(function(){
                let error = false;
                if(!error){
                    resolve({username:"sahilmurtuza91", password:"123"})
                }
                else{
                    reject("oops: something wrong")
                }
            },2000)
        })
        promiseFour.then((user)=>{
            console.log(user);
            return user.username;
        }).then((uname)=>{
            console.log(uname)
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            console.log("The promise is either resolved or rejected")
        })

        const promiseFive = new Promise(function(resolve, reject){
            setTimeout(function(){
                let error = true;
                if(!error){
                    resolve({username:"JavaScript", password:"123"})
                }
                else{
                    reject("Error: JS went wrong")
                }
            },2000)
        })
        async function consumePromiseFive() {
            try{
                const response = await promiseFive;
                console.log(response);
            }
            catch(error){
                console.log(error);
            }
        }
        consumePromiseFive();

        // async function getAllUser() {
        //     try{
        //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
        //         // console(response);
        //         const data = await response.json();
        //         console.log(data);
        //     }
        //     catch(error){
        //         console.log("E: ",error);
        //     }
        //     finally{
        //         console.log("The code is finally executed")
        //     }
        // }
        // getAllUser();

        // Another way
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })