import React, { useState } from "react";
import "./square.css";
import Square from "./Square";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [values, setValue] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextValues = values.slice();

    if (!nextValues[i]) {
      if (xIsNext) {
        nextValues[i] = "X";
      } else {
        nextValues[i] = "O";
      }
      setValue(nextValues);
      setXIsNext(!xIsNext);
    }
  }

  return (
    <>
      <div className="board-row">
        <Square value={values[0]} onSquareClick={() => handleClick(0)} />
        <Square value={values[1]} onSquareClick={() => handleClick(1)} />
        <Square value={values[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={values[3]} onSquareClick={() => handleClick(3)} />
        <Square value={values[4]} onSquareClick={() => handleClick(4)} />
        <Square value={values[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={values[6]} onSquareClick={() => handleClick(6)} />
        <Square value={values[7]} onSquareClick={() => handleClick(7)} />
        <Square value={values[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
