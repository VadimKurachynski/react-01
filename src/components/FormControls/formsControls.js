import React from "react";
import s from "./FormControls.module.css";
export const Textarea=({input,meta:{touched,error,warning},...props})=>{



    return (
        <div className={touched && error ? s.formControlerror : s.formControl}>
            <div>
            <textarea {...input}{...props}/>
        </div>
            {touched && error && <span>{error}</span>}
        </div>
    )
}