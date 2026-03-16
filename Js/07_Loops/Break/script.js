// labes
/*
A label is a name given to a block of code or a loop so that break or continue can refer to that specific block.

Syntax:
labelName:statement
*/
loop1: for(let i=0; i<5; i++){
    loop2: for(let j=0; j<5; j++){
        console.log(j)
    }
    console.log()
}
console.log("Another form of the loop using the label in continue")
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    console.log(i)
  }
}

console.log()

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop2; }
    console.log(i)
   }
}