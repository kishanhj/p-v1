import React from "react";
import "../public/css/component.css"


export default function Card( props ){
    return (
        <div className = 'card'>
            {props.children}
        </div>
    )
}