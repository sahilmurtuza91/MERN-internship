
import { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { useState } from "react";
function App() {
  const [themeMode, setThemeMode] = useState("light"); // State to manage the current theme mode

  // Function to switch to dark theme 
  const darkTheme = () =>{
    setThemeMode("dark"); // Update the theme mode to dark
  }

  const lightTheme = () =>{ // here the value and fnction name should must be same
    setThemeMode("light"); // Update the theme mode to light
  }

  // actual chnage in theme
  useEffect (()=>{
    document.querySelector('html').classList.remove("light", "dark"); // Remove existing theme classes from the HTML element
    document.querySelector('html').classList.add(themeMode); // Add the current theme mode as a class to the HTML element
  },[themeMode]) // This effect runs whenever the themeMode state changes
  return (
    <ThemeProvider value = {{themeMode, darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  );
}

export default App;
