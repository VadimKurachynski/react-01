// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settins from "./components/Settins/Settins";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/dialogs/*" element = {<DialogsContainer  />}/>
                    <Route path="/news" element= {<News/>}/>
                    <Route path="/music" element= {<Music/>}/>
                    <Route path="/users" element= {<UsersContainer />}/>
                    <Route path="/settins" element= {<Settins/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
