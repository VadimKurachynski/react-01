
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Navigate} from "react-router-dom";




const Profile = (props) => {
    return (
        <div>

            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner}  saveProfile={props.saveProfile}    profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>

    );
}
export default Profile;