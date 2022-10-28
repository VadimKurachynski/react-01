const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSSAGE = 'UPDATE-NEW-POST-MESSSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 7,
                message: state.textMessage,
            };
            state.messages.push(newPost);
            state.textMessage = "";
            return state;
        case UPDATE_NEW_POST_MESSSAGE:
            state.textMessage = action.newText;
            return state;
        default:
            return state;
    };

}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_MESSSAGE, newText: text}
}


export default dialogsReducer;