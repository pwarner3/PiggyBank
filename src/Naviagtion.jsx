//import { useState } from "react";
import "./App.css";

function Navigation() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
