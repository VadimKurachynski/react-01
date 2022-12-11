import React from "react";
import s from "./FormControls.module.css";
import {Field} from "redux-form";


export const Textarea = ({input, meta: {touched, error, warning}, ...props}) => {
    return (
        <div className={touched && error ? s.formControlerror : s.formControl}>
            <div>
                <textarea {...input}{...props}/>
            </div>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input, meta: {touched, error, warning}, ...props}) => {
    return (
        <div className={touched && error ? s.formControlerror : s.formControl}>
            <div>
                <input {...input}{...props}/>
            </div>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const createField=(placeholder,name,validators, component, props={}, text="")=>(
    <div>
        <Field placeholder={placeholder}name={name}
               validate={validators}
               component={component}
            {...props}
            />
    </div>
)