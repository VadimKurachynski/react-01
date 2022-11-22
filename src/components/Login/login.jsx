import React from "react";
import {reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
            <form>
                <div>
                    <input placeholder={"Login"}/>
                </div>
                <div>
                    <input placeholder={"Password"}/>
                </div>
                <div>
                    <input type={"checkbox"}/>remember me
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