import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem=(props)=>{
    return(
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.content}>

            <div className={s.dialogs}>
                <div className={s.dialogsitems}>

                    <DialogItem name="Vadim" id="1"/>
                    <DialogItem name="Dima" id="2"/>
                    <DialogItem name="Marina" id="3"/>
                    <DialogItem name="Sveta" id="4"/>
                    <DialogItem name="Nikita" id="5"/>


                </div>


            </div>


            <div className={s.messages}>
                <div className={s.message}>
                    Hi, I am react developer
                </div>
                <div className={s.message}>
                    O no, does your friends play soccer?
                </div>
                <div className={s.message}>
                    Yes, i can play the gitare
                </div>

            </div>
        </div>
    );

}

export default Dialogs;