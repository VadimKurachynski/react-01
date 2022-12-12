import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";



const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile}) => {

    let [editMode,setEditMode]=useState(false);



    if (!profile) {//если не загрузились пока данные
        return <Preloader/>
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = async (formData) => {
      await saveProfile(formData);
          setEditMode(false);
      }



    return (
        <div>
            <div>user Id: {profile.userId}</div>
            <div><img src={profile.photos.large || userPhoto} className={s.mainFhoto}/></div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            {/*<div><img src={props.profile.photos.small}/></div>*/}

            {editMode?
                <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                :<ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}


            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>


        </div>
    );
}


const ProfileData = ({goToEditMode, isOwner,profile}) => {

    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b>:{profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>:{profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About Me</b>:{profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>:{Object.keys(profile.contacts).map(key =>{
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
}



const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>

}


export default ProfileInfo;