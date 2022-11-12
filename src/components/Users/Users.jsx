import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selectedPage : s.selectedPagenot}
                              onClick={(e) => {
                                  props.onPageChanged(p);
                              }}>{p} </span>
                    )
                }
            )}
        </div>
        {props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                       </NavLink>
                   </div>
                   <div>
                       {u.followed ? <button onClick={() => { props.unfollow(u.id)}}> follow</button>
                       : <button onClick={() => {

                               axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`).then(response => {
                                   this.props.toggleIsFetching(false);
                                   this.props.setUsers(response.data.items);
                                   this.props.setTotalUsersCount(response.data.totalCount);
                               });


                           props.follow(u.id)  }}>unfollow</button>}


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

}

export default Users;