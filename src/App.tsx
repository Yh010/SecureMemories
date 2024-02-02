/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UploadData from "./pages/UploadData";
import Register from "./pages/Register";
import UserSettings from "./pages/UserSettings";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import NotificationBar from "./components/notifications/NotificationBar";
import { Roles } from "./constants";
/* import Navbar from "./components/Navbar"; */
/* import imagePath from "./assets/react.svg"; */
/* import SingleFileUploader from "./components/SingleFileUploader"; */

function App() {
  /* 
  const [count, setCount] = useState(0);
 */
  /* const items = ["Home", "Product", "Service"]; */
  return (
    <>
      {/*  <SingleFileUploader /> */}
      <div>
        {/* <Navbar
          brandName="My Brand"
          imageSrcPath={imagePath}
          navItems={items}
        /> */}
      </div>
      <NotificationBar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route
          element={
            <ProtectedLayout
              allowedRoles={[
                Roles.User,
                Roles.ProjectManager,
                Roles.Lead,
                Roles.Admin,
              ]}
            />
          }
        >
          <Route path="/" element={<Home />} />

          {/* check if the uplaod data component is added correctly below */}
          <Route path="/uploadData" element={<UploadData />} />
        </Route>
        <Route element={<ProtectedLayout allowedRoles={[Roles.Admin]} />}>
          <Route path="/user-settings" element={<UserSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
