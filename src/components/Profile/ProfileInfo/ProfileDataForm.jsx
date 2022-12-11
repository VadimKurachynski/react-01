import {createField, Input} from "../../FormControls/formsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({props}) => {
    return <form>
        {<div><button onClick={()=>{}}>save</button></div>}
        <div>
            <b>Full name</b>:{createField("Full name","fullName",[],Input)}
        </div>
        <div>
            <b>Looking for a job</b>:{props.profile.lokingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>:{props.profile.lokingForAJobDescription}
            </div>
        }
        <div>
            <b>About Me</b>:{props.profile.about}
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