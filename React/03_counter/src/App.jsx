import { useState } from 'react' // Hook import
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // useState is a Hook
  // It returns an array: [stateVariable, functionToUpdateState]
  // counter = current value
  // setCounter = function to update counter
  // 15 = initial value

  // let counter = 5;
  let [counter, setCounter] = useState(15); // here the intial value 15 is assigned to the counter we can also use different name insted of setCounter

   // Function to increase countert
  const addValue = () => {
    console.log("Clicked ", counter);
    // counter = counter + 1; // this will work but the passing the counytetr value insode the setCounter(counter)
    // setCounter(counter);

    if(counter <20){
      // Updating state (DO NOT directly change counter)
      // setCounter(counter + 1) //  --> this increae by one

      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1) --> this all increase only one time to increae this for the multiple time --> use an function thet is previouisCountyer or we can use any name

      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1); //--> this whole increse the counter value 4 at a time
      // Important:
      // Using prevCounter ensures correct update
      // Each line increases the value by 1


    }
    else{
      alert("Counter value not more then 20!")
    }
  }
   // Function to decrease counter
  const decreaseValue = () => {
    console.log("Decreae buttom is clicked: ", counter);
    if(counter>0){
      setCounter(counter - 1);
    }
    else{
      alert("Counter value is not less then 0!")
    }
  }
  return (
    <>
      <h1>Learning React | Sahil Murtuza</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
