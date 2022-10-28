const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSSAGE = 'UPDATE-NEW-POST-MESSSAGE';


const dialogsReducer = (state, action) => {

    if (action.type === ADD_MESSAGE) {
        let newPost = {
            id: 7,
            message: state.textMessage,
        };
        state.messages.push(newPost);
        state.textMessage = "";


    } else if (action.type === UPDATE_NEW_POST_MESSSAGE) {
        state.textMessage = action.newText;


    }


    return state;
}