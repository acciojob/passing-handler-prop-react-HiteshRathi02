import React, { useState } from "react";
import "../styles/Child.css"

export default function Selection({ key,applyColor}){
    const [style, setStyle] = useState({background: ""})

    return(
    <>
    <div className="fix-box" style={style} key={key} onClick={()=>applyColor(setStyle)}>
        Selection
    </div>
    </>
    )
}