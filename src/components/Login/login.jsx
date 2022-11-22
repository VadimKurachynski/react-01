import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
            <form>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
                </div>
                <button>Login</button>
            </form>
    );
}
const LoginReduxForm=reduxForm({form:'login'})(LoginForm)


const Login = () => {
    return (
        <div>
            <h2>LOGIN</h2>
          <LoginReduxForm />
        </div>
    );
}


export default Login;