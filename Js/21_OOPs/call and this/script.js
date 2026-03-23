function SetUsername(username) {
    // 'this' refers to the object that will call this function
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    // We are calling SetUsername function here
    // 'call(this, username)' means:
    // Run SetUsername
    // And force 'this' inside it to be the current object (createUser's object)
    SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}

// 'new' keyword does 4 things internally:
// 1. Creates a new empty object {}
// 2. Sets 'this' to that object
// 3. Executes the function (createUser)
// 4. Returns the object
const obj = new createUser("Sahilmurtuza91", "sahil@example", "234643");
console.log(obj);