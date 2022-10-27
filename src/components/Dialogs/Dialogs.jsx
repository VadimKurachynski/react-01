import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {createRef} from "react";
// import {addPostMessages, updatetextMessage} from "../../redux/state";





const Dialogs = (props) => {

    let addMessage=()=> {
        let text=reft.current.value;
        props.props.addPostMessages(text);
        reft.current.value="";
    }

    let onChangeTr=()=> {
        // let text=reft.current.value;
        // props.props.updatetextMessage(text);

    }




    let reft=createRef();
     let dialogsElements = props.props._state.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
     let messagesElements = props.props._state.dialogsPage.messages.map((m) => <Message message={m.message} id={m.id}/>);


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
                    <textarea onChange={onChangeTr} ref={reft} value={props.props._state.textMessage}></textarea>

                </div>
                <div>
                    <button onClick={addMessage}>add</button>
                </div>

            </div>

        </div>
    );










}

export default Dialogs;