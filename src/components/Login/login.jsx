import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/formsControls";
import {maxLengthCreator, required1} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "../FormControls/FormControls.module.css";
const maxLength10 = maxLengthCreator(30);
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required1, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={`password`}
                       validate={[required1, maxLength10]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <button>Login</button>
        </form>
    );
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit1 = (formData) => {
        console.log(formData);
        props.login(formData.email,formData.password,formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit1}/>
        </div>
    );
}
const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps,{login}) (Login);