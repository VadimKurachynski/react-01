import {profileAPI, usersAPI} from "../api/api";
import profile from "../components/Profile/Profile";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';

let initialiState = {
    posts: [
        {id: 1, message: `Hi, I am react developer`, likesCount: 12},
        {id: 2, message: "Hi, how are you?", likesCount: 10},
        {id: 3, message: "it's my first post", likesCount: 21},
    ],
    // newPostText: "it-vadim",
    profile: null,
    status:"начальный",
};
const profileReducer = (state = initialiState, action) => {
    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                posts: [...state.posts, {id: 6, message: action.newPostBody, likesCount: 15000}],

            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile:action.profile,
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status:action.status,
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => { return {type: ADD_POST,newPostBody}}
export const updateNewPostTextActionCreator = (text) => { return {type: UPDATE_NEW_POST_TEXT, newText: text}}
 export const setUserProfile = (profile) => { return {type: SET_USER_PROFILE,profile}}
export const setStatus = (status) => { return {type: SET_STATUS,status}}

export const getUserProfile = (userId) => (dispatch)=>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch)=>{
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch)=>{
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode===0){
            dispatch(setStatus(status));
        }

    });
}

export default profileReducer;