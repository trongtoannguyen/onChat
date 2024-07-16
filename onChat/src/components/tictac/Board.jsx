import React, { useState } from "react";
import "./square.css"



export default function Board() {
    const [values, setValue] = useState(Array(9).fill(null));
    function handleClick(i) {
        const nextValues = values.slice();
        nextValues[i] = "X";
        setValue(nextValues);
    }

    return <>
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
}

function Square({ value, onSquareClick }) {
    return <div className="square" onClick={onSquareClick}>{value}</div>;
}
