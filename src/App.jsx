import { useState } from "react";
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
      <div className="d-flex flex-nowrap">
        <div className="flex-column flex-shrink-0">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default App;
