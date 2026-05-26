import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<UsersList />}
        />
        <Route
          path="/users/:id"
          element={<UserDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;