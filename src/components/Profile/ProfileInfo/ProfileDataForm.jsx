import {createField, Input, Textarea} from "../../FormControls/formsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({props}) => {
    return <form>
        {<div><button onClick={()=>{}}>save</button></div>}
        <div>
            <b>Full name</b>:{createField("Full name","fullName",[],Input)}
        </div>
        <div>
            <b>Looking for a job</b>:{ createField("","lokingForAJob",[],Input,{type:"checkbox"})}
        </div>

            <div>
                <b>My professional skills</b>:
                { createField("My professional skills","lokingForAJobDescription",[],Textarea)}
            </div>
        }
        <div>
            <b>About Me</b>:
            { createField("About me","aboutMe",[],Textarea)}
        </div>
        {/*<div>*/}
        {/*    <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key =>*/}
        {/*    <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
        {/*)}*/}
        {/*</div>*/}
    </form>

}

const ProfileDataFormReduxForm=reduxForm({form:'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;