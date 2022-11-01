const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialiState = {
    users: [
        {id: 1, followed:false, fullName: `Dmitry`, status: "I am boss", location:{city:'Minsk',country:'Belarus'}},
        {id: 2, followed:true, fullName: `Marina`, status: "I am student", location:{city:'Moscow',country:'Russia'}},
        {id: 3, followed:false, fullName: `Lena`, status: "I am job", location:{city:'Pinsk',country:'Belarus'}},
        {id: 4, followed:true, fullName: `Vitalij`, status: "I am ingener", location:{city:'Pruzhany',country:'Belarus'}},
    ],
};

const usersReducer = (state = initialiState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export const followAC = () => ({type: FOLLOW})
export const unfollowAC = () => ({type: UNFOLLOW})



export default usersReducer;