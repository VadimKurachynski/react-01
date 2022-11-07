const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialiState = {
    users: [
        // {id: 1,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:false, fullName: `Dmitry`, status: "I am boss", location:{city:'Minsk',country:'Belarus'}},
        // {id: 2,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:true, fullName: `Marina`, status: "I am student", location:{city:'Moscow',country:'Russia'}},
        // {id: 3,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:false, fullName: `Lena`, status: "I am job", location:{city:'Pinsk',country:'Belarus'}},
        // {id: 4,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:true, fullName: `Vitalij`, status: "I am ingener", location:{city:'Pruzhany',country:'Belarus'}},
    ],
    pageSize:5,
    totalUsersCount:0,
};

const usersReducer = (state = initialiState, action) => {
console.log("usersReducer--->",state,action);

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;

                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:{
            return{...state,users: [...state.users,...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;