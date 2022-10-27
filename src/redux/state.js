
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: `Hi, I am react developer`, likesCount: 12},
//             {id: 2, message: "Hi, how are you?", likesCount: 10},
//             {id: 3, message: "it's my first post", likesCount: 21},
//         ],
//         newPostText:"it-vadim"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Vadim"},
//             {id: 2, name: "Dima"},
//             {id: 3, name: "Marina"},
//             {id: 4, name: "Sveta"},
//             {id: 5, name: "Nikita"},
//             {id: 6, name: "Karina"},
//         ],
//         messages: [
//             {id: 1, message: `Hi, I am react developer`},
//             {id: 2, message: `O no, does your friends play soccer?`},
//             {id: 3, message: `Yes, i can play the gitare!`},
//         ],
//         textMessage:"vadim"
//     }
// }
//
//
//  export let addPost=()=>{
//     let newPost={
//        id: 7,
//        message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText="";
//      rescan(state);
// }
//  export let updateNewPostText=(newText)=>{
//      state.profilePage.newPostText=newText;
//      rescan(state);
//  }
//
// //Message------------------------------------
//  export let addPostMessages=(text)=>{
//      let newPost={
//          id: 7,
//          message:text,
//      };
//      state.dialogsPage.messages.push(newPost);
//      state.dialogsPage.textMessage="";
//      rescan(state);
//  }
//
//  export let updatetextMessage=(text)=>{
//      state.dialogsPage.textMessage=text;
//      rescan(state);
//  }
//
// let rescan =()=>{}
//
//  export const subscribe=(observer)=>{
// rescan=observer;
// }


let store={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: `Hi, I am react developer`, likesCount: 12},
                {id: 2, message: "Hi, how are you?", likesCount: 10},
                {id: 3, message: "it's my first post", likesCount: 21},
            ],
            newPostText:"it-vadim"
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
            textMessage:"vadim"
        }
    },

    _rescan(){
        console.log("no");
    },



   addPost(){
        let newPost={
            id: 7,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
       this._state.profilePage.posts.push(newPost);
       this._state.profilePage.newPostText="";
       this._rescan(this._state);
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText=newText;
        this._rescan(this._state);
    },




    addPostMessages(text){
        let newPost={
            id: 7,
            message:text,
        };
        this._state.dialogsPage.messages.push(newPost);
        // this._state.dialogsPage.textMessage="";
        console.log(this._state.dialogsPage.messages);
        this._rescan(this._state);

    },




    updatetextMessage(text){
        this._state.dialogsPage.textMessage=text;
        this._rescan(this._state);
    },



    subscribe(observer){
        this._rescan=observer;
    }

}


window.store=store;

 export default store;
