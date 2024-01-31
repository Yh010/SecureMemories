/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";
import MultipleFileUploader from "./components/MultipleFileUploader";
/* import SingleFileUploader from "./components/SingleFileUploader"; */

function App() {
  /* 
  const [count, setCount] = useState(0);
 */
  return (
    <>
      {/*  <SingleFileUploader /> */}
      <MultipleFileUploader />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
