
import React, { StrictMode } from 'react'

// Import createRoot function from React DOM
// This is used to connect React with the HTML page
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app!</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit Google"
// }
// this will not work in the normal react because this is defined by the custom


// define same as the custom react
const reactElement = React.createElement(
  'a', // here we have to give the tag name
  {href:"https://google.com",target: "_blank"},
  "Click me to visit Google"

)

// Render (display) HTML content inside the root container
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp/>
    {reactElement}
  </StrictMode>,
)

// createRoot → connects React to HTML
// render → shows content on screen