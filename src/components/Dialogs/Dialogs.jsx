import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {createRef} from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onChangeTr = (e) => {
        let text=e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }


    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} id={m.id}/>);


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
                    <textarea onChange={onChangeTr}  value={props.dialogsPage.textMessage}></textarea>

                </div>

                <div>
                    <button onClick={addMessage}>add</button>
                </div>

            </div>

        </div>
    );


}

export default Dialogs;