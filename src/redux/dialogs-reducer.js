const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_POST_MESSSAGE = 'UPDATE-NEW-POST-MESSSAGE';

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
  //  textMessage: "vadim"
};


const dialogsReducer = (state=initialiState, action) => {


    switch (action.type) {

        case ADD_MESSAGE:

            let body=action.newMessageBody;
            return{
                ...state,

                messages: [...state.messages,{id: 6, message: body}]
            };

        // case UPDATE_NEW_POST_MESSSAGE:
        //    return{
        //         ...state,
        //        newMessageBody : action.body,
        //     };

        default:
            return state;
    }

}

export const addMessageActionCreator = (newMessageBody) => {
    return {type: ADD_MESSAGE,newMessageBody}
}
// export const updateNewMessageTextActionCreator = (body) => {
//     return {type: UPDATE_NEW_POST_MESSSAGE, body: body}
// }


export default dialogsReducer;