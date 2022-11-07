import s from "./Users.module.css"
import axios from "axios";
// import userPhoto from "/src/assets/img/user.png";
import userPhoto from "../../assets/img/user.png";
import React from 'react';


class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    render() {

        let pagesCount=this.props.totalUsersCount/this.props.pageSize;

        return (
            <div>

                <div>
                    <span>1</span>
                    <span className={s.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>

                </div>


                {this.props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                   </div>
                   <div>
                       {u.followed ? <button onClick={() => {
                           this.props.unfollow(u.id)
                       }}>follow</button> : <button onClick={() => {
                           this.props.follow(u.id)
                       }}>unfollow</button>}
                   </div>
               </span>
                    <span>
                   <span>
                       <div>{u.name}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{"u.location.country"}</div>
                       <div>{"u.location.city"}</div>
                   </span>

               </span>
                </div>)}

            </div>
        )
    }
}


export default Users;