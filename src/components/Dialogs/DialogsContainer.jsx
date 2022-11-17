import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => ({
   // return {
        dialogsPage:state.dialogsPage,

   // }
});

let AuthRedirectComponent=withAuthRedirect(Dialogs);//hoc

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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;