import {profileAPI, usersAPI} from "../api/api";
import profile from "../components/Profile/Profile";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST='DELETE_POST';
const SAVE_PHOTO_SUCCESS='SAVE_PHOTO_SUCCESS';


let initialiState = {
    posts: [
        {id: 1, message: `Hi, I am react developer`, likesCount: 12},
        {id: 2, message: "Hi, how are you?", likesCount: 10},
        {id: 3, message: "it's my first post", likesCount: 21},
    ],
    // newPostText: "it-vadim",
    profile: null,
    status: "начальный",
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
                profile: action.profile,
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case DELETE_POST: {
            return {
                ...state,
               posts:state.posts.filter(p=>p.id!==action.postId)
            }
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
               profile: {...state.profile,photos:action.photos }
            }
        }


        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => {
    return {type: ADD_POST, newPostBody}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const deletePost=(postId)=>({type: DELETE_POST,postId});
export const savePhotoSuccess=(photos)=>({type: SAVE_PHOTO_SUCCESS,photos});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch,getState) => {
    const userId=getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else{
         dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
      //  dispatch(stopSubmit("edit-profile", {"contacts":{"facebook": response.data.messages[0]} }));
    }
}

export default profileReducer;