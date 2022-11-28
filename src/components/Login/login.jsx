import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/formsControls";
import {maxLengthCreator, required1} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

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
    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit1}/>
        </div>
    );
}

export default connect(null,{login}) (Login);