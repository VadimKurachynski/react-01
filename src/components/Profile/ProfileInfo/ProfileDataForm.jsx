import {createField, Input, Textarea} from "../../FormControls/formsControls";
import {reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";


const ProfileDataForm = ({handleSubmit,profile}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            <b>Full name</b>:{createField("Full name","fullName",[],Input)}
        </div>
        <div>
            <b>Looking for a job</b>:{ createField("","lookingForAJob",[],Input,{type:"checkbox"})}
        </div>

            <div>
                <b>My professional skills</b>:
                { createField("My professional skills","lookingForAJobDescription",[],Textarea)}
            </div>
        }
        <div>
            <b>About Me</b>:{profile.about}
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