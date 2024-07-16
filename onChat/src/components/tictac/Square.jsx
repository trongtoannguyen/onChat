import React, { memo } from "react";

function Square({ value, onSquareClick }) {
  console.log(`Render square`);
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
}

export default memo(Square);
