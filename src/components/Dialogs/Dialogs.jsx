import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}  />);
    let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id} />);


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
        </div>
    );

}

export default Dialogs;