import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) =>(isActive ? s.active : s.item);
const Nav=() => {
    return (
      <nav className={s.nav}>
      <div><NavLink to="/profile" className = {setActive}>Profile</NavLink></div>
      <div><NavLink to="/dialogs" className = {setActive}>Messages</NavLink></div>
      <div><NavLink to="/news" className = {setActive}>News</NavLink></div>
      <div><NavLink to="/music" className = {setActive}>Music</NavLink></div>
      <div><NavLink to="/settins" className = {setActive}>Settins</NavLink></div>
    </nav>
    );
}

export default Nav;