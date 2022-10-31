import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    debugger;
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
            messages={state.messages}
            dialogs={state.dialogs}
            textMessage={state.textMessage}

        />

    );


}

export default DialogsContainer;