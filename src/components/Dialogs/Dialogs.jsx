import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.content}>

            <div className={s.dialogs}>
               <div className={s.dialogsitems}>
                 <div className={s.itemname}>
                     Vadim
                 </div>
                   <div className={s.itemname}>
                       Dima
                   </div>
                   <div className={s.itemname}>
                       Olia
                   </div>
                   <div className={s.itemname}>
                       Sveta
                   </div>
                   <div className={s.itemname}>
                       Nikita
                   </div>

               </div>


            </div>




            <div className={s.messages}>
                Messages

            </div>
        </div>
    );

}

export default Dialogs;