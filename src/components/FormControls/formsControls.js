import React from "react";
import s from "./FormControls.module.css";
export const Textarea=({input,meta:{touched,error,warning},...props})=>{
    return (
        <div className={s.formControl+" "+s.error}>
            <div>
            <textarea {...input}{...props}/>
        </div>
            {touched && error && <span>"some error"</span>}
        </div>
    )
}