const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSSAGE = 'UPDATE-NEW-POST-MESSSAGE';

let initialiState={
    dialogs: [
        {id: 1, name: "Vadim"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Marina"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Nikita"},
        {id: 6, name: "Karina"},
    ],
    messages: [
        {id: 1, message: `Hi, I am react developer`},
        {id: 2, message: `O no, does your friends play soccer?`},
        {id: 3, message: `Yes, i can play the gitare!`},
    ],
    textMessage: "vadim"
};


const dialogsReducer = (state=initialiState, action) => {

    let stateCopy={
        ...state,
        //messages:[...state.messages],
    };

    

    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 7,
                message: state.textMessage,
            };
            stateCopy.messages.push(newPost);
            stateCopy.textMessage = "";
            return stateCopy;
        case UPDATE_NEW_POST_MESSSAGE:
            stateCopy.textMessage = action.newText;
            return stateCopy;
        default:
            return stateCopy;
    };

}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_MESSSAGE, newText: text}
}


export default dialogsReducer;