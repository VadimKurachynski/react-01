import React from "react";
import s from "./FormControls.module.css";
export const Textarea=(props)=>{
    return (
        <div className={`${s.formControl}+${s.error}`}>
            <textarea {...props.input}/>
        </div>
    )
}