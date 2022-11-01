const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialiState={
    posts: [
        {id: 1, message: `Hi, I am react developer`, likesCount: 12},
        {id: 2, message: "Hi, how are you?", likesCount: 10},
        {id: 3, message: "it's my first post", likesCount: 21},
    ],
    newPostText: "it-vadim"
};

const profileReducer = (state=initialiState, action) => {

    switch (action.type) {
        case ADD_POST: {



            let i=state.posts.length+1;
            let newPost = {
                id: i,
                message: state.newPostText,
                likesCount: 7
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReducer;