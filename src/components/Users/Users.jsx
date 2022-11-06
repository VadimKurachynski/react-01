import s from "./Users.module.css"
let Users = (props) => {
debugger;
    if (props.users.length === 0) {
    props.setUsers([
            {
                id: 1,
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png',
                followed: false,
                fullName: `Dmitry`,
                status: "I am boss",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png',
                followed: true,
                fullName: `Marina`,
                status: "I am student",
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png',
                followed: false,
                fullName: `Lena`,
                status: "I am job",
                location: {city: 'Pinsk', country: 'Belarus'}
            },
            {
                id: 4,
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png',
                followed: true,
                fullName: `Vitalij`,
                status: "I am ingener",
                location: {city: 'Pruzhany', country: 'Belarus'}
            },
        ]
    )
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