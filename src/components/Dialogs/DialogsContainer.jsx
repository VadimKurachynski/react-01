import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {

    }
    let onChangeTr = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <Dialogs
            addMessage={addMessage}
            onChangeTr={onChangeTr}
            dialogsPage={state.dialogsPage}
        />
    );

}

let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChangeTr: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },

    }
}
const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;