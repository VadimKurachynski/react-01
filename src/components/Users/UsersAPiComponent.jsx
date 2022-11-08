import s from "./Users.module.css"
import axios from "axios";
// import userPhoto from "/src/assets/img/user.png";
import userPhoto from "../../assets/img/user.png";
import React from 'react';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

        onPageChanged=(pageNumber)=>{
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    render() {

        let pagesCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages=[];
        for (let i=1;i<=pagesCount;i++){
            pages.push(i);
        }

        return <Users />
    }
}


export default UsersAPIComponent;