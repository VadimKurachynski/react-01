import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required1} from "../../utils/validators/validators";
import {Textarea} from "../FormControls/formsControls";
const maxLength10=maxLengthCreator(10);

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} id={m.id} key={m.id}/>);

    let  addNewMessage=(values)=>{
        props.addMessage(values.newMessageBody);

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
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"text"} name={"newMessageBody"} type={"textarea"} component={Textarea}validate={[required1, maxLength10]}/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;