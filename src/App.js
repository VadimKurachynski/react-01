// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settins from "./components/Settins/Settins";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {Component} from "react";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./redux/auth-reducer";
import {compose} from "redux";

class App extends Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/settins" element={<Settins/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>

        );
    }
}





export default  compose(
    withRouter, //обворачиваем withRouter, если не работает Route
    connect(null,{getAuthUserData}))(App);


