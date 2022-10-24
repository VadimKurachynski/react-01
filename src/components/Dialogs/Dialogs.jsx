import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {createRef} from "react";


let addMessage=()=> {
    console.log(reft.current.value);
    reft.current.value = "";
}

let reft=createRef();
const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id}/>);



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
                    <textarea ref={reft}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>add</button>
                </div>

            </div>

        </div>
    );

}

export default Dialogs;