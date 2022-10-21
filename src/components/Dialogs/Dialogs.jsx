import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.content}>

            <div className={s.dialogs}>
                <div className={s.dialogsitems}>
                    <div className={s.dialog}>
                        Vadim
                    </div>
                    <div className={s.dialog}>
                        Dima
                    </div>
                    <div className={s.dialog}>
                        Olia
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>
                    <div className={s.dialog}>
                        Nikita
                    </div>

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