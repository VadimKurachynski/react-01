import s from "./Users.module.css"
import * as axios from "axios";
let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{

            props.setUsers(response.data.items);
    });


}
console.log("Users---->",props)
    return (

    <div>
            { props.users.map(u => <div key={u.id}>

               <span>
                   <div>
                       <img src={u.photoUrl}/>

                   </div>
                   <div>
                       {u.followed?<button onClick={()=>{props.unfollow(u.id)}}>follow</button>:<button onClick={()=>{props.follow(u.id)}}>unfollow</button>}

                   </div>
               </span>
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>

               </span>


            </div>) }




    </div>)







}
export default Users;