import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_=()[]{}~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select(); // Select the text inside the input field
    passwordRef.current?.setSelectionRange(0, length); // Select text from index 0 to "length" (full password range)
    window.navigator.clipboard.writeText(password); // Copy the password text to clipboard
  }, [password]); // Recreate this function only when "password" changes

  // select() → highlight the text
  // setSelectionRange() → choose how much text to select
  // writeText() → copy text

  useEffect(() => {
    passwordGenerate();
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto text-center shadow-md rounded-lg px-4 pb-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3 mt-6">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden  bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 mx-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipbord}
            className="outline-none bg-blue-700 px-3 py-0.5 text-white shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gep-x-1">
            <input
              type="range" // This makes a slider that you can drag left and right
              min={8} // The smallest value of the slider is 8
              max={100} // The largest value of the slider is 100
              value={length} // The current value of the slider is stored in the "length" variable
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              // When you move the slider, this updates the "length" variable to the slider's value
            />
            <label>length: {length}</label>{" "}
            {/* This shows the current value of the slider next to it */}
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prevCheck) => !prevCheck);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="charInput"
              onChange={() => {
                setCharacterAllowed((prevCheck) => !prevCheck);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
