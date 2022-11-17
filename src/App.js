// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settins from "./components/Settins/Settins";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
function App() {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Nav/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer />}/>
                    <Route path="/profile" element={<ProfileContainer />}/>
                    <Route path="/dialogs/*" element = {<DialogsContainer  />}/>
                    <Route path="/news" element= {<News/>}/>
                    <Route path="/music" element= {<Music/>}/>
                    <Route path="/users" element= {<UsersContainer />}/>
                    <Route path="/settins" element= {<Settins/>}/>
                    <Route path="/login" element= {<Login />}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
