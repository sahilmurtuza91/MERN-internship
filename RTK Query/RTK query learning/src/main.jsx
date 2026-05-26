import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import {api} from "./Services/apiSlice.js"
import {store} from "./app/store.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ApiProvider api={api}>
      //   <App />
      // </ApiProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <p>Contact Us</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
