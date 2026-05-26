import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store.js"
import LandingPage from './Pages/LandingPage.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import AddTask from './components/AddTask.jsx'
import TaskList from "./components/TaskList.jsx"
import Analytics from "./components/Analytics.jsx"
import FocusTimer from './components/FocusTimer.jsx'
import Settings from './components/Settings.jsx'
import { requestPermission, listenNotification, } from "./firebase-messaging";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "edit-task",
        element: <AddTask />,
      },
      {
        path: "tasks",
        element: <TaskList />
      },
      {
        path: "analytics",
        element: <Analytics />
      },
      {
        path: "timer",
        element: <FocusTimer />
      },
      {
        path: "settings",
        element: <Settings />
      },

    ]
  }
]);
requestPermission();
listenNotification();
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './Layout.jsx'


// createRoot(document.getElementById('root')).render(
//  <StrictMode>
//   <App />
//  </StrictMode>
// )
