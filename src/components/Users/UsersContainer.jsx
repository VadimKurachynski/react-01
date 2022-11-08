import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
// import Users from "./UsersC";
import Users from "./UsersAPiComponent";
import UsersAPIComponent from "./UsersAPiComponent";


let mapStateToProps=(state)=>{
    console.log("mapStateToProps---->UsersContainer",state);
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
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
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },




    }

}

export default connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent);
