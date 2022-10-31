import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
    let addMessage = () => {
        props.addMessage();
    }

    let onChangeTr = (e) => {
        let text = e.target.value;
        props.onChangeTr(text);

    }

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id}/>);


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
                <div>
                    <textarea onChange={onChangeTr} value={props.textMessage}></textarea>

                </div>

                <div>
                    <button onClick={addMessage}>add</button>
                </div>

            </div>

        </div>
    );


}

export default Dialogs;