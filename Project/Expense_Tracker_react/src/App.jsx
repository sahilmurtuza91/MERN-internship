import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/Store";

import Landing from "./Pages/Landing"
import Home from "./Pages/Home"
import Expenses from "./Pages/Expenses";
import AddExpensePage from "./Pages/AddExpensePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/expensesList",
    element: <Expenses/>
  },
  {
    path: '/add',
    element: <AddExpensePage />
  }
]);
function App() {

  return (
      <Provider store = {store}>
        <RouterProvider router={router}/>
      </Provider>
  )
}

export default App
