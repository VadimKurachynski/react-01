import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import store from "./redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));

const rescan=(store)=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>

                <App
                    props={store}

                    // state={state}
                    //  addPost={addPost}
                    //  updateNewPostText={updateNewPostText}
                    //  addPostMessages={addPostMessages}
                    //  updatetextMessage={updatetextMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rescan(store);

store.subscribe(rescan);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
