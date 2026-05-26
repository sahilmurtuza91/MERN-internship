// Layout.jsx
import { Outlet } from "react-router-dom";
import Headre from "./components/Header"
import Footer from "./components/Footer"
import {useState} from "react"
import SettingsSidebar
from "./components/settings/SettingsSidebar";

function Layout() {
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <>
      <Headre onOpenSettings = {() => setOpenSettings(true)}/>
      <Outlet />
      <Footer />

      <SettingsSidebar
        open={openSettings}
        onClose={() =>
          setOpenSettings(false)
        }
      />
    </>
  );
}

export default Layout;

// import { useEffect } from "react";
// import { requestPermission } from "./firebase-messaging";

// function App() {
//   useEffect(() => {
//     requestPermission();
//   }, []);

//   return <h1>this is teh code </h1>
// }

// export default App;