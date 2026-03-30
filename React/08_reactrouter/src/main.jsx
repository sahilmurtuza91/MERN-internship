import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, {githubInfoLoader} from './components/GitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Another Way to create the router using createRoutesFromElements which is more similar to the way we used to create routes in react-router-dom v5 and below
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> {/* This is the parent route and it will render the Layout component which contains the header and footer and the Outlet component which will render the child routes */}
      < Route path='' element = {<Home/>}/> {/* This is the child route and it will render the Home component when the path is '/' */}
      <Route path='about' element = {<About/>}/> {/* This is the child route and it will render the About component when the path is '/about' */}
      <Route path='contact' element = {<Contact/>}/> {/* This is the child route and it will render the Contact component when the path is '/contact' */}
      <Route path='user/:userid' element = {<User/>}/> {/* This is the child route and it will render the User component when the path is '/user/:userid' */}
      <Route 
      loader ={githubInfoLoader} 
      path= "github" 
      element = {<GitHub/>}/>
      {/* here  the loader means a function that fetches data before rendering the route */}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* here we are passing the router to the RouterProvider  */}
  </StrictMode>,
)
