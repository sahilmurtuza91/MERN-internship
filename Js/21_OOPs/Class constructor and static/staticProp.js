class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    // static method
    static createId(){
        return `123`
    }
}
const sahil = new User("sahil");
// console.log(sahil.createId()); // this will gives error

// static means:
// This method belongs to the class itself, NOT to objects (instances)