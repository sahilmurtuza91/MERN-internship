const user = {
    username: "Sahilmurtuza91",
    loginCount: 8,
    signedIn: true,
    gerUserDetails: function(){
        return `Got the user details ${this.username}`
    }
}
// console.log((user.gerUserDetails()))
const user2 = {
    username: "example1",
    loginCount: 43,
    signedIn: false,
    gerUserDetails: function(){
        console.log(this);
        return `Got the user details ${this.username}`
    }
}
// console.log((user2.gerUserDetails()))



// Constructor Function
function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    this.greetinf = function(){
        console.log(`Welcome ${this.username}`)
    }
}
// Create object using constructor
const userOne =new  User("Sahilmurtuza91", 12, true);
const userTwo = new User("example",34,true);
console.log(userOne);
console.log(userTwo);

// 'new' keyword creates a new object (instance)
// It calls the constructor function and binds 'this' to the new object
// It automatically returns the new object