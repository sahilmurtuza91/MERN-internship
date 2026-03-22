try{
    // code that may cause error
}
catch{
    //code to handle the error--> this block execute inly if the try code have some error
}
// The finally block executes after the try and catch blocks, whether an error occurred or not.
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs, no matter what
}
// throw is used to manually create and raise a custom error in JavaScript.
try{
    let age = 16;
    if(age < 18){
        throw new Error("You are underage")
    }
    else{
        console.log("Eligible for vote")
    }
}
catch(err){
    console.log(err)
}
finally{
    console.log("Finally the program is executed!");
}