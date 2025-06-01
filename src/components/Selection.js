import React, { useState } from "react";
import "../styles/Child.css"

export default function Selection({applyColor,bgcolor}){
    const [style, setStyle] = useState({background: ""})
    console.log(bgcolor);

    return(
    <>
    <div className="fix-box" data-testid={bgcolor} style={style} onClick={()=>applyColor(setStyle)}>
        Selection
    </div>
    </>
    )
}