import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import Board from "./components/tictac/Board";

function App() {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Profile />
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <Board/>
      </div>
    </>
  );
}

export default App;
