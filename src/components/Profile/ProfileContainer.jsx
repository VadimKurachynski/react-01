import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component {
componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
         this.props.setUserProfile(response.data);
    });
}

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps=(state)=>({
    a:34;
});

export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer);