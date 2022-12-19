// import logo from './logo.svg';
import "./App.css";
import React from 'react';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settins from "./components/Settins/Settins";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));// для оптимизации загрузки


class App extends Component {
catchAllUnhandledErrors=(promiseRejectionEvent)=>{
    alert("some error");
}
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized){ return <Preloader />}

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


const mapStateToProps=(state)=>({
    initialized: state.app.initialized,
})



export default  compose(
  //  withRouter, //обворачиваем withRouter, если не работает Route
    connect(mapStateToProps,{initializeApp}))(App);


