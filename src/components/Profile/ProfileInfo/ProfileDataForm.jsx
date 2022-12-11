

const ProfileDataForm = ({props}) => {
    return <form>
        {<div><button onClick={goToEditMode}>save</button></div>}
        <div>
            <b>Full name</b>:{createField}
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
        <div>
            <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key =>
            <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        )}
        </div>
    </form>

}

export default ProfileDataForm;