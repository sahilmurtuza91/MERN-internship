class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`usernamae is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        // 'super' calls parent class constructor
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const newuser = new Teacher("sahil", "sahil@example.com", 234);
console.log(newuser)
newuser.addCourse()
newuser.logMe();