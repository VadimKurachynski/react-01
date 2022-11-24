import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus.jsx";


const ProfileInfo = (props) => {
    if(!props.profile){//если не загрузились пока данные
        return <Preloader />
    }

    return (
        <div>
            <div className={s.cont_img}>

            </div>

            <div>
                <ProfileStatus status ={props.status} updateStatus={props.updateStatus}/>
            </div>

            <div className={s.descriptionBlock}>

            </div>
            <div>user Id:    {props.profile.userId}</div>
            <div><img src={props.profile.photos.large}/></div>
            <div> <img src={props.profile.photos.small}/></div>
            <div>о бо мне:  {props.profile.aboutMe}</div>
            <div>контакты:</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.mainLink}</div>
            <div>{props.profile.contacts.website}</div>
            <div>{props.profile.contacts.youtube}</div>
            <div>Полное имя:</div> <div>{props.profile.fullName}</div>
            <div>lookingForAJob :</div> <div>{props.profile.lookingForAJob}</div>
            <div>lookingForAJobDescription :</div> <div>{props.profile.lookingForAJobDescription}</div>


        </div>

    );
}
export default ProfileInfo;