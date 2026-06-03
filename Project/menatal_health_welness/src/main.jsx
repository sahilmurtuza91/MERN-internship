import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./Routes.jsx"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import them from "./them.js"

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <ThemeProvider theme={them}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
)