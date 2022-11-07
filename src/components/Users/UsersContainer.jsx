import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
// import Users from "./UsersC";
import Users from "./Users";


let mapStateToProps=(state)=>{
    console.log("mapStateToProps---->UsersContainer",state);
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
    }
}
let mapDispatchToProps=(dispatch)=>{
    console.log("mapDispatchToProps---->UsersContainer");
    return{
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));
        },
       setUsers: (users)=>{
            dispatch(setUsersAC(users));
        },




    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
