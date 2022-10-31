import React, {createRef} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state=props.store.getState();
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onChangeTr = (e) => {
        let text=e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));

    }





    return (
        <Dialogs
            addMessage={addMessage}
            onChangeTr={onChangeTr}
            messages={state.message}
            textMessage={state.textMessage}

        />

    );


}

export default DialogsContainer;