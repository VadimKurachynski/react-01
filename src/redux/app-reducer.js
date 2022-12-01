import {autAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_INITIALIZED = 'SET_INITIALIZED';



let initialiState = {
initialized:false,

};

const appReducer = (state = initialiState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
                }

        default:
            return state;
    }
}

export const setAuthUserData = (userId,email,login, isAuth) => ({type: SET_INITIALIZED, payload:
        {userId,email,login,isAuth}})

export const getAuthUserData=()=>(dispatch)=>{
    autAPI.me()
        .then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login,true));
        }
    });
}

export const login=(email,password,rememberMe)=>(dispatch)=>{

    autAPI.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
dispatch(getAuthUserData())
            } else{
                let message=response.data.messages.length>0?response.data.messages[0]
                    : "some error";
                dispatch(stopSubmit("login",{_error: message} ));
            }
        });
}
export const logout=()=>(dispatch)=>{
    autAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null,false));
            }
        });
}
export default authReducer;