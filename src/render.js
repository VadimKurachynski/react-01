import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost, addPostMessages, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));


export const rescan=(state)=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addPostMessages={addPostMessages}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}



