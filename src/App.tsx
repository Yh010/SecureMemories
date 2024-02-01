/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UploadData from "./pages/UploadData";
import Register from "./pages/Register";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uploadData" element={<UploadData />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
