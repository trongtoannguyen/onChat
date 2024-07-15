import React, { useState } from "react";
import "./square.css"



export default function Board() {
    return <>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
    </>
}

function Square() {

    const [value, setValue] = useState(null);
    function handleClick() {
        setValue("X");
    }
    return <div className="square" onClick={handleClick}>{value}</div>;
}
