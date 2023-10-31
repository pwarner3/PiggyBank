import { useState } from "react";
import Navigation from "./Naviagtion";
import GoalForm from "./GoalForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-6">
            <GoalForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
