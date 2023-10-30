import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Naviagtion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card-1">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Navigation />
    </>
  );
}

export default App;
