import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' 
import { InputBox } from './components' 
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
 const [amouunt, setamount] = useState(0)
 const [from, setfrom] = useState("usd")
 const [to, setTo] = useState("inr")
 const [convertedAmount, setConvertedAmount] = useState(0);
 
  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo)

  const swap = () =>{
    setfrom(to);
    setTo(from);
    setConvertedAmount(amouunt);
    setamount(convertedAmount); 
  }

  const Convert = () =>{
    if(currencyInfo[to]){
      setConvertedAmount(amouunt * currencyInfo[to]);
    }
  }

  return (
    <div
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1711606815631-38d32cdaec3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1cnJlbmN5JTIwZXhjaGFuZ2V8ZW58MHx8MHx8fDA%3D)`
    }}
    >
      <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form 
            onSubmit={(e)=>{
              e.preventDefault();
              Convert();
            }}
            >
              <div className='w-full mb-1'>
                <InputBox
                  label="from"
                  amount={amouunt}
                  currencyOptions={option}
                  onCurrencyChnage={(currency)=>setfrom(currency)}
                  selectCurrency={from}
                  onAmoutChange={(amouunt)=> setamount(amouunt )}
                />
              </div>
              <div className='relative w-full h-0.5'>
                  <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white text-white px-2 py-0.5 bg-blue-500  rounded-lg'
                  onClick={swap}
                  >
                    Swap
                  </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox
                 label="to"
                  amount={convertedAmount}
                  currencyOptions={option}
                  onCurrencyChnage={(currency)=>setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert from {from.toUpperCase()} to  {to.toUpperCase()}</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App
