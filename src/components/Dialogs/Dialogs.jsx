import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {


    let addMessage = () => {
        props.addMessage();
    }

    let onChangeTr = (e) => {
        let text = e.target.value;
        props.onChangeTr(text);

    }


    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} id={m.id} key={m.id}/>);


    const onSubmit1=(formData)=>{
        console.log(formData);
    }


    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>

            <div className={s.messages}>
                {messagesElements}

            </div>

            <div>
                <LoginReduxForm onSubmit={onSubmit1} />
            </div>
        </div>
    );
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"text"} name={"login"} type={"textarea"} component={"input"}/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'MessageForm'})(AddMessageForm)

export default Dialogs;