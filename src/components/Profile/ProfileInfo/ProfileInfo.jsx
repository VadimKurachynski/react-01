import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {//если не загрузились пока данные
        return <Preloader/>
    }


    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.cont_img}>

            </div>

            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>


            <div className={s.descriptionBlock}>
            </div>
            <div>user Id: {props.profile.userId}</div>
            <div><img src={props.profile.photos.large || userPhoto} className={s.mainFhoto}/></div>
            {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
            <div><img src={props.profile.photos.small}/></div>



            <div>
                <b>Full name</b>:{props.profile.fullName}
            </div>
            <div>
                <b>Loking for a job</b>:{props.profile.lokingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lokingForAJob&&
            <div>
                <b>My professional skills</b>:{props.profile.lokingForAJobDescription}
            </div>
            }
            <div>
                <b>About Me</b>:{props.profile.about}
            </div>

            <div>
                <b>Contacts</b>:{Object.keys(props.profile.contacts)}
            </div>




            {/*<div>о бо мне:  {props.profile.aboutMe}</div>*/}
            {/*<div>контакты:</div>*/}
            {/*<div>{props.profile.contacts.github}</div>*/}
            {/*<div>{props.profile.contacts.instagram}</div>*/}
            {/*<div>{props.profile.contacts.twitter}</div>*/}
            {/*<div>{props.profile.contacts.vk}</div>*/}
            {/*<div>{props.profile.contacts.mainLink}</div>*/}
            {/*<div>{props.profile.contacts.website}</div>*/}
            {/*<div>{props.profile.contacts.youtube}</div>*/}
            {/*<div>Полное имя:</div> <div>{props.profile.fullName}</div>*/}
            {/*<div>lookingForAJob :</div> <div>{props.profile.lookingForAJob}</div>*/}
            {/*<div>lookingForAJobDescription :</div> <div>{props.profile.lookingForAJobDescription}</div>*/}

        </div>
    );
}


const Contact=({contactTitle, contactValue})=> {
    return <div><b>{contactTitle}</b>: {contactValue}</div>

}


export default ProfileInfo;