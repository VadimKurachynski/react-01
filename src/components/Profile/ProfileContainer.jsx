import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';
import {compose} from "redux";


export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps,prevState,shapshot) {
        if (this.props.match.params.userId!=prevProps.match.params.useId){
            this.refreshProfile();
        }

    }

    render() {

        return (
            <Profile {...this.props}
                    isOwner={!this.props.match.params.useId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,

});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer)


