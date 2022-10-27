import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));


let rescan=(state)=>{

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={store.getState()}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    addPostMessages={store.addPostMessages.bind(store)}
                    updateTextMessage={store.updateTextMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );

}

 rescan(store.getState());


store.subscribe(rescan);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
