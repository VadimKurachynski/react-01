import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../FormControls/formsControls";
import {maxLengthCreator, required1} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "../FormControls/FormControls.module.css";

const maxLength10 = maxLengthCreator(30);
const LoginForm = ({handleSubmit, error,captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
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

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl &&  createField ("Symbol from image","captcha",[],Input,{})}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <button>Login</button>
        </form>
    );
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit1 = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit1} captchaUrl={props.captchaUrl}/>
        </div>
    );
}
const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);