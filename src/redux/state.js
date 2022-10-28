const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_NEW_POST_MESSSAGE='UPDATE-NEW-POST-MESSSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: `Hi, I am react developer`, likesCount: 12},
                {id: 2, message: "Hi, how are you?", likesCount: 10},
                {id: 3, message: "it's my first post", likesCount: 21},
            ],
            newPostText: "it-vadim"
        },
        dialogsPage: {
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
        }
    },
    _rescan() {
        console.log("no");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rescan = observer;
    },



    dispatch(action) {
        if (action.type === ADD_POST) {

            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 7
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._rescan(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._rescan(this._state);
        };

        if(action.type === ADD_MESSAGE){
            let newPost = {
                id: 7,
                message: this._state.dialogsPage.textMessage,
            };
            this._state.dialogsPage.messages.push(newPost);
            this._state.dialogsPage.textMessage = "";
            this._rescan(this._state);


        }else  if(action.type === UPDATE_NEW_POST_MESSSAGE){
            this._state.dialogsPage.textMessage = action.newText;
            this._rescan(this._state);

        }





    },





}

export const addPostActionCreator=()=>{
    return{type:ADD_POST}
}
export const updateNewPostTextActionCreator=(text)=>{
    return{type:UPDATE_NEW_POST_TEXT,newText:text}
}

export const addMessageActionCreator=()=>{
    return{type:ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator=(text)=>{
    return{type:UPDATE_NEW_POST_MESSSAGE,newText:text}
}

window.store = store;
export default store;
