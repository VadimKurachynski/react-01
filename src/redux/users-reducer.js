const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS='TOGGLE_IS_FOLLOWING_PROGRESS';

let initialiState = {
    users: [
        // {id: 1,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:false, fullName: `Dmitry`, status: "I am boss", location:{city:'Minsk',country:'Belarus'}},
        // {id: 2,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:true, fullName: `Marina`, status: "I am student", location:{city:'Moscow',country:'Russia'}},
        // {id: 3,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:false, fullName: `Lena`, status: "I am job", location:{city:'Pinsk',country:'Belarus'}},
        // {id: 4,photoUrl:'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png', followed:true, fullName: `Vitalij`, status: "I am ingener", location:{city:'Pruzhany',country:'Belarus'}},
    ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false,
    followingInProgress:[2,3],
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
            return{...state,users: action.users}
        }

        case SET_CURRENT_PAGE:{
            return{...state,currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT:{
            return{...state,totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING:{
            return{...state,isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }


        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching,userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId})
export default usersReducer;