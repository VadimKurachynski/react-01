import s from "./Users.module.css"
let Users = (props) => {

    return (
    <div>

            { props.users.map(u => <div key={u.id}>

               <span>
                   <div>
                       <img src={u.photoUrl}/>

                   </div>
                   <div>
                       {u.followed?<button>Follow</button>:<button>UnFollow</button>}

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