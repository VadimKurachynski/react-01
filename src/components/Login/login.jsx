import React from "react";

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


const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
          <LoginForm />
        </div>
    );
}


export default Login;