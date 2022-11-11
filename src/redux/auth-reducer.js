const SET_USER_DATA = 'SET_USER_DATA';



let initialiState = {
userId:null,
   email:null,
    login:null,
};

const authReducer = (state = initialiState, action) => {
console.log("authReducer--->",state, action);

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
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
export default authReducer;