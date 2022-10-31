import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onChangeTr = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <Dialogs
            addMessage={addMessage}
            onChangeTr={onChangeTr}
            messages={state.dialogsPage.messages}
            dialogs={state.dialogsPage.dialogs}
            textMessage={state.dialogsPage.textMessage}

        />

    );

}

export default DialogsContainer;