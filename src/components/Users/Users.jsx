let Users = (props) => {

    return (
    <div>

            { props.users.map(u => <div key={u.id}>

               <span>
                   <div>
                       <img/>
                   </div>
                   <div>
                       <button>Follow</button>
                   </div>
               </span>
               <span></span>


            </div>) }




    </div>)







}
export default Users;