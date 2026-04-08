import React from 'react'
import StartButton from "../Components/StartButton"
import {Navigate, useNavigate} from "react-router-dom"


function Home() {
    const navigaet = useNavigate();
    const handleClick = () =>{
      navigaet("/home")
    }

  return (
    <div className='background-col w-full h-screen'>
        <div className='flex items-center ml-6 py-10'>
            <img src="/Images/icons8-zoho-books-48.png" alt=""  className='w-10 h-10'/>
            <div className='text-white hover:text-orange-500 text-lg font-semibold'>FinTackPro</div>
        </div>

        
        <h2 className='text-white ml-6 mt-10 font-bold text-[60px] max-w-xl'>Yor Personal Expense<br></br> Manager</h2>

        <div className='ml-6 mt-10 flex justify-center items-center' onClick={handleClick}>
        <StartButton text="Get Started" />
      </div>
        

    </div>
  )
}

export default Home