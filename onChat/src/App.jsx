import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import Game from "./components/tictac/Game";

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
        <Game />
      </div>
    </>
  );
}

export default App;
