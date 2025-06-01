import React, { useState } from "react";
import "../styles/Child.css"

export default function Selection({applyColor,bgcolor}){
    const [style, setStyle] = useState({background: ""})
    console.log(bgcolor);

    return(
    <>
    <div data-testid={bgcolor} className="fix-box"  style={style} onClick={()=>applyColor(setStyle)}>
        Selection
    </div>
    </>
    )
}