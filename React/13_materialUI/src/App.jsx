import { useState } from 'react'
import Button from "@mui/material/Button"
import './App.css'
import MyButton from "./Components/Button"
import MyButtonGroup from "./Components/ButtonGroup"
import MyCheckBox from "./Components/CheckBox"
import MyRadioButton from "./Components/RadioButton"
import MySlider from "./Components/Slider"
import MySelect from "./Components/Select"
import MyTeaxtField from "./Components/TeaxtField"
import MySwitch from "./Components/Switch"
import MyBox from './Components/Box'
import MyContainer from "./Components/Container"
import MyGrid from "./Components/Grid"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Button variant='contained'
      >Hellow MaterialUI
      </Button>


      <MyButton />
      <MyButtonGroup />
      <MyCheckBox />
      <MyRadioButton />
      <MySlider />
      <MySelect />
      <MyTeaxtField />
      <MySwitch />
      <MyBox/>
      <MyContainer />
      <MyGrid />
    </>
  )
}

export default App
