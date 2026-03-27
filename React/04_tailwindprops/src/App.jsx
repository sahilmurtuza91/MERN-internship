import { useState } from 'react'
import UserCard  from './component/usercard'
import './App.css'

function App() {
  let myObj = {
    name: "Sahil",
    age: 21
  }

  let myArr = [2,3,4,5,6]
  return (
      <>
      <h1 className='bg-green-500 text-white mb-4 px-20'>Welcome to Tailwind | react props learnig</h1>
      <UserCard username="Devian" btntext = "Click me" />
      <UserCard username = "Hounkins" btntext = "Visit me"/> {/*here we cant pass the arry or objects but we can pass array or object by using it variabke and decleare upper*/}
      </>
  )
}

export default App
