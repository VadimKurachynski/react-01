import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={s.head}>
                <div><img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png"/></div>
                <div className={s.loginBlock}>

                    {props.isAuth ?
                        <div><NavLink to={'/login'}>{props.login}</NavLink>
                            <div>
                                <button onClick={props.logout}>Log out</button>
                            </div>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}

                </div>
            </div>
        </header>
    );
}

export default Header;