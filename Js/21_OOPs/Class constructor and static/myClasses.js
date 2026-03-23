// Creating a class (blueprint for objects)
class user {
    constructor(username, email, password){
         // Constructor runs when we create object using 'new'
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${Math.floor(Math.random()*10)}${this.password}abc${Math.floor(Math.random()*10)}`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new user("sahil", "sahil@example.com", 26476)

console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.EncryptPassword = function(){
    return `${Math.floor(Math.random()*10)}${this.password}abc${Math.floor(Math.random()*10)}`
}

const usereOneAnother = new User("sahil", "sahil@example.com", 3764)

console.log(usereOneAnother.EncryptPassword());