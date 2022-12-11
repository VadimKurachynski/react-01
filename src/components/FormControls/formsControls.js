import React from "react";
import s from "./FormControls.module.css";
import {Field} from "redux-form";

const FormControl=({input,meta:{touched,error},children})=>{
    const hasError=touched&& error;
    return(
        <div className={s.formControl+" "+(hasError? s.error:"")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
// export const Textarea = ({input, meta: {touched, error, warning}, ...props}) => {
//     return (
//         <div className={touched && error ? s.formControlerror : s.formControl}>
//             <div>
//                 <textarea {...input}{...props}/>
//             </div>
//             {touched && error && <span>{error}</span>}
//         </div>
//     )
// }

export const Textarea=(props)=>{
    const{input,meta,child,...restProps}=props;
    return<FormControl {...props}><textarea{...input}{...restProps}/></FormControl>
}

export const Input=(props)=>{
    const{input,meta,child,...restProps}=props;
    return<FormControl {...props}><input{...input}{...restProps}/></FormControl>
}


// export const Input = ({input, meta: {touched, error, warning}, ...props}) => {
//     return (
//         <div className={touched && error ? s.formControlerror : s.formControl}>
//             <div>
//                 <input {...input}{...props}/>
//             </div>
//             {touched && error && <span>{error}</span>}
//         </div>
//     )
// }

export const createField=(placeholder,name,validators, component, props={}, text="")=>(
    <div>
        <Field placeholder={placeholder}name={name}
               validate={validators}
               component={component}
            {...props}
            />{text}
    </div>
)