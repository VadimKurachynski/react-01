import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import React from "react";


let Users = (props) => {


    return <div>
        <div>

            {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.selectedPagenot}
                                 onClick={(e) => {
                                    props.onPageChanged(p);
                                 }}>{p}</span>
                }
            )}

        </div>

        {props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                   </div>
                   <div>
                       {u.followed ? <button onClick={() => {
                           props.unfollow(u.id)
                       }}>follow</button> : <button onClick={() => {
                           props.follow(u.id)
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


}

export default Users;