import React from 'react';
import './index.css';
import state from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, addPostMessages, updateNewPostText, updatetextMessage} from "./redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));
const rescan=(state)=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addPostMessages={addPostMessages}
                     updatetextMessage={updatetextMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
 rescan(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
