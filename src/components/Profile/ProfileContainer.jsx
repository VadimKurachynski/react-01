import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {
componentDidMount() {

let userId=this.props.match.params.userId;
if(!userId) {userId=26672};
this.props.getUserProfile(userId);



}

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}



let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
});



// let AuthRedirectComponent=withAuthRedirect(ProfileContainer);//hoc
// let withUrlDataContainerComponent=withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps,{getUserProfile}) (withUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)