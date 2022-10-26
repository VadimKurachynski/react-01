 import {rescan} from "../render";

let state = {
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


}


export let addPost=()=>{
    let newPost={
       id: 7,
       message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText="";
     rescan(state);
}
 export let updateNewPostText=(newText)=>{
     state.profilePage.newPostText=newText;

     rescan(state);

 }

//Message------------------------------------
 export let addPostMessages=(text)=>{
     let newPost={
         id: 7,
         message:text,
     };
     state.dialogsPage.messages.push(newPost);
     state.dialogsPage.textMessage="";
     rescan(state);
 }
 export let updatetextMessage=(text)=>{
     state.dialogsPage.textMessage=text;

     rescan(state);
 }


export default state;
