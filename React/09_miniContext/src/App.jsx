import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>This is the page where we learn the context Switching</h1>
        <Login />
         <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
