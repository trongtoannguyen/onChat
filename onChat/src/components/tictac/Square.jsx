import React, { memo } from "react";
import "./tictac.css";

function Square({ value, onSquareClick }) {
  console.log(`Render square`);
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
}

export default memo(Square);
