/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";
import MultipleFileUploader from "./components/MultipleFileUploader";
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
      <MultipleFileUploader />
    </>
  );
}

export default App;
