let state = {
    profilePage: {
        posts: [
            {id: 1, message: `Hi, I am react developer`, likesCount: 12},
            {id: 2, message: "Hi, how are you?", likesCount: 10},
            {id: 3, message: "it's my first post", likesCount: 21},
        ],
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
    }


}


export let addPost=(postMessage)=>{

    let newPost={
       id: 7,
       message: "Hello!",
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}


export default state;