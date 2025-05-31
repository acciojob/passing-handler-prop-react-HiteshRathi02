import React, { useState } from "react";
import "../styles/Child.css"

export default function Selection({applyColor}){
    const [style, setStyle] = useState({background: ""})

    return(
    <>
    <div className="fix-box" style={style}  onClick={()=>applyColor(setStyle)}>
        Selection
    </div>
    </>
    )
}