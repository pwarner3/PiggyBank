import { useState } from "react";
import Navigation from "./Naviagtion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-9">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
