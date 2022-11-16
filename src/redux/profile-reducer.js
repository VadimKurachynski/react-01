import {usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialiState = {
    posts: [
        {id: 1, message: `Hi, I am react developer`, likesCount: 12},
        {id: 2, message: "Hi, how are you?", likesCount: 10},
        {id: 3, message: "it's my first post", likesCount: 21},
    ],
    newPostText: "it-vadim",
    profile: null,
};

const profileReducer = (state = initialiState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let i = state.posts.length + 1;
            return {
                ...state,
                posts: [...state.posts, {id: i, message: state.newPostText, likesCount: 15000}],
                newPostText: "",
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile:action.profile,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => { return {type: ADD_POST}}
export const updateNewPostTextActionCreator = (text) => { return {type: UPDATE_NEW_POST_TEXT, newText: text}}
 export const setUserProfile = (profile) => { return {type: SET_USER_PROFILE,profile}}


export const getUserProfile = (userId) => (dispatch)=>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));

    });
}


export default profileReducer;