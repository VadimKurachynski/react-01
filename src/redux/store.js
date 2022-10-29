import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar=sidebarReducer(this._state.sidebar, action);
        this._rescan(this._state);
    },
}
window.store = store;
//export default store;
