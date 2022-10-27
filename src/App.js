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
// import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
// import Message from "./components/Dialogs/Message/Message";
// import {addPostMessages, updatetextMessage} from "./redux/state";
// import store from "./redux/state";


function App(props) {

    return (

        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile"
                           element={<Profile
                               // profilePage={props.state.profilePage}
                               //               addPost={props.addPost}
                               //               updateNewPostText={props.updateNewPostText}
                                props={props.props}


                           />}/>
                    <Route path="/dialogs/*"
                           element = {<Dialogs
                                            // state={props.state.dialogsPage}
                                            //    addPostMessages={addPostMessages}
                                            //    textMessage={props.state.dialogsPage.textMessage}
                                            //    updatetextMessage={updatetextMessage}
                               props={props.props}
                           />}/>

                    <Route path="/news" element= {<News/>}/>
                    <Route path="/music" element= {<Music/>}/>
                    <Route path="/settins" element= {<Settins/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
