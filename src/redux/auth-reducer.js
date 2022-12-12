import {autAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';


let initialiState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:null,
};

const authReducer = (state = initialiState, action) => {
    console.log("authReducer--->", state, action);

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
})

// export const getAuthUserData=()=>(dispatch)=>{
//     return autAPI.me()
//         .then(response => {
//         if (response.data.resultCode === 0) {
//             let {id, email, login} = response.data.data;
//             dispatch(setAuthUserData(id, email, login,true));
//         }
//     });
// }

export const getAuthUserData = () => async (dispatch) => {
    let response = await autAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await autAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0]
            : "some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}


export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(stopSubmit("login", {_error: message}));
}



export const logout = () => async (dispatch) => {
    let response = await autAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}
export default authReducer;