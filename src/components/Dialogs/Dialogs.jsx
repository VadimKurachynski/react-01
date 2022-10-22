import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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


let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);


const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsitems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    );

}

export default Dialogs;