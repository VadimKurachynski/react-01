import React from "react";

const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <form>
                <div>
                    <input placeholder={"Login"}/>

                </div>
                <div>
                    <input placeholder={"Password"}/>

                </div>
                <div>
                    <input type={"checkbox"}/>
                </div>

            </form>
        </div>
    );
}

export default Login;