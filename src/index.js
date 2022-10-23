import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";

let dialogs = [
    {id: 1, name: "Vadim"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Marina"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Nikita"},
    {id: 5, name: "Karina"},
]
let messages = [
    {id: 1, message: `Hi, I am react developer`},
    {id: 2, message: `O no, does your friends play soccer?`},
    {id: 3, message: `Yes, i can play the gitare`},
]






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
